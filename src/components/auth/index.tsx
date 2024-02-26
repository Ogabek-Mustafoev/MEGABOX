import { httpClient } from '@/utils';
import { UnFormatPhoneNumber } from '@/utils/price-format';

import { useState, useEffect, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import toast from 'react-hot-toast';

import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { FastField } from 'formik';
import { get } from 'lodash';
import { useTranslations } from 'next-intl';

import { MainInput, PhoneInputMask } from '..';
import { CustomForm } from '../form';

interface IAuthModal {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}
interface ILogin {
  phone: string;
}

interface IVerify {
  code: string;
  phone: string;
}

export const AuthModal = (props: IAuthModal) => {
  const { isOpen, onOpenChange, onClose } = props;
  const t = useTranslations('auth');
  const [value, setValue] = useState<ILogin>({ phone: '' });
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [mode, setMode] = useState<'login' | 'verify'>('login');
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const login = async (values: ILogin) => {
    try {
      setLoading(true);
      const captchaToken = await executeRecaptcha?.('LOGIN');
      if (!captchaToken) return;
      const { phone } = values;

      if (phone) {
        let { data } = await httpClient.post('users/signin', {
          phone: UnFormatPhoneNumber(phone),
          captchaToken,
        });
        setRemainingTime(data?.data?.['blockedTime']);
      }
      setValue(values);
      setMode('verify');
      setLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const verify = async (values: IVerify) => {
    try {
      setLoading(true);
      const captchaToken = await executeRecaptcha?.('VERIFY');
      if (!captchaToken) return;
      const { code } = values;
      await httpClient.post('users/signin/verify', {
        phone: UnFormatPhoneNumber(value?.phone),
        code: `${code}`,
        captchaToken,
      });
      onClose();
      setMode('login');
      setValue({ phone: '' });
      toast.success(t('verified_success'));
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const formatTime = useCallback((seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (remainingTime && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime ? prevTime - 1 : null));
      }, 1000);
      setIntervalId(intervalId);
    } else if (remainingTime === 0) {
      console.log('Time is up resend the register data!');
    }

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const formData = {
    login: {
      onSuccess: () => {},
      onError: () => {},
      onsubmit: login,
      url: 'users/signin',
      fieldsData: [
        {
          name: 'phone',
          validations: [{ type: 'required' }],
          value: get(value, 'phone'),
          onSubmitValue: (value: string) => UnFormatPhoneNumber(value),
        },
      ],
      fieldsBody: [
        <FastField
          key={3}
          name="phone"
          component={PhoneInputMask}
          label="Telefon raqamingiz"
          placeholder="+998 (##) ###-##-##"
        />,
      ],
    },
    verify: {
      onSuccess: () => {},
      onError: () => {},
      onsubmit: verify,
      url: 'users/signin/verify',
      fieldsData: [
        {
          name: 'code',
          validations: [{ type: 'required' }],
          value: get(value, 'code'),
          onSubmitValue: (value: string) => String(value),
        },
      ],
      fieldsBody: [
        <>
          <div className="flex items-center flex-col text-[14px] text-gray-400 mb-5">
            <span>{value?.phone}</span> <p>raqamiga kod yuborildi</p>
          </div>
          <FastField
            key={2}
            name="code"
            component={MainInput}
            label="SMS kodni kiriting"
            placeholder="x x x x x"
            type="number"
          />
          <div className="text-center text-gray-400 mt-5">
            {remainingTime !== null && remainingTime > 0 && (
              <div className="countdown-timer">{formatTime(remainingTime)}</div>
            )}
            {remainingTime === 0 && (
              <Button
                color="danger"
                type="button"
                variant="light"
                onClick={() => login(value)}
                className="w-full bg-white text-black"
              >
                Kodni qayta olish
              </Button>
            )}
          </div>
        </>,
      ],
    },
  };
  const formFieldsData = formData[mode];

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg">
                {mode === 'login' ? 'Kirish yoki ro‘yxatdan o‘tish' : 'SMS kodni kiriting'}
              </ModalHeader>
              <ModalBody>
                <CustomForm
                  method={'post'}
                  url={formFieldsData?.url}
                  onSuccess={formFieldsData?.onSuccess}
                  onError={formFieldsData?.onError}
                  fields={formFieldsData?.fieldsData}
                  onSubmit={formFieldsData?.onsubmit}
                >
                  {({ isSubmitting }) => {
                    return (
                      <>
                        {formFieldsData?.fieldsBody?.map((res, index) => (
                          <div
                            className="field__row"
                            key={index}
                          >
                            {res}
                          </div>
                        ))}
                        {isSubmitting}
                        <div className="flex items-center justify-end gap-2 mt-6">
                          <Button
                            color="danger"
                            type="button"
                            variant="light"
                            onPress={mode === 'login' ? onClose : () => {}}
                            onClick={() => {
                              if (mode !== 'login') {
                                clearInterval(intervalId ? intervalId : '');
                                setMode('login');
                              }
                            }}
                            className="w-full bg-light-gray text-black"
                          >
                            {mode === 'login' ? 'Yopish' : 'Ortga qaytish'}
                          </Button>
                          <Button
                            isLoading={loading}
                            disabled={loading}
                            color="primary"
                            type="submit"
                            className="w-full"
                          >
                            {mode === 'login' ? 'SMS kodni olish' : 'Kodni tasdiqlash'}
                          </Button>
                        </div>
                      </>
                    );
                  }}
                </CustomForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

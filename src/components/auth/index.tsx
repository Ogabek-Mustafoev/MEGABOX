import { UnFormatPhoneNumber } from '@/utils/price-format';

import { useState } from 'react';

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { FastField } from 'formik';
import { get } from 'lodash';

import { MainInput, PhoneInputMask } from '..';
import { CustomForm } from '../form';

interface IAuthModal {
  isOpen: boolean;
  onOpenChange: () => void;
}
export const AuthModal = (props: IAuthModal) => {
  const { isOpen, onOpenChange } = props;
  const [values, setValues] = useState({});

  const formData = {
    login: {
      onSuccess: () => {},
      onError: () => {},
      onsubmit: () => {},
      url: 'users/login',
      fieldsData: [
        {
          name: 'phone',
          validations: [{ type: 'required' }],
          value: get(values, 'phone'),
          onSubmitValue: (value: string) => UnFormatPhoneNumber(value),
        },
      ],
      fieldsBody: [
        <FastField
          key={3}
          name="phone"
          component={PhoneInputMask}
          label={'Telefon raqamingiz'}
          placeholder={'+998 (##) ###-##-##'}
        />,
      ],
    },
  };
  const formFieldsData = formData['login'];
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <CustomForm
                method={'post'}
                url={formFieldsData?.url}
                onSuccess={formFieldsData?.onSuccess}
                onError={formFieldsData?.onError}
                fields={formFieldsData?.fieldsData}
                onSubmit={formFieldsData?.onsubmit}
              >
                {({ isSubmitting, values }) => {
                  console.log(values);
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
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button
                          color="primary"
                          onPress={onClose}
                        >
                          Action
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
  );
};

import React from 'react';
import GoogleRecaptcha from '../../forms/GoogleRecaptcha';
import Notice from '../../notifications/Notice';
import TextArea from '../../forms/TextArea';
import InputField from '../../forms/InputField';
import Button from '../../buttons/Button';
import Modal from '../../overlays/Modal';
import { ConsultantContactFormProps } from './ConsultantContactForm.types';

function ConsultantContactForm({
  modalOnClose, onSubmit, onChange, currentLanguage, buttonLoading, formData, formErrors, translations,
  recaptchaSitekey, onRecaptchaChange, recaptchaRef, handleClick, onBlur,
}: ConsultantContactFormProps) {
  return (
    <Modal
      title={translations.modalTitle}
      onClose={modalOnClose}
    >
      <form
        onSubmit={(e) => onSubmit(e)}
        name="contactForm"
        aria-label="contactForm"
        noValidate
      >
        <InputField
          type="text"
          name="contactFirstName"
          id="contactFirstName"
          required
          onChange={onChange}
          onBlur={onBlur}
          value={formData?.contactFirstName}
          error={formErrors.contactFirstName}
          aria-label={translations.labels.firstNameLabel}
          formGroupLabel={translations.labels.firstNameLabel}
        />
        <InputField
          type="text"
          name="contactSurname"
          id="contactSurname"
          required
          onChange={onChange}
          onBlur={onBlur}
          value={formData?.contactSurname}
          aria-label={translations.labels.surnameLabel}
          formGroupLabel={translations.labels.surnameLabel}
          error={formErrors.contactSurname}
        />
        <InputField
          type="email"
          name="contactEmail"
          id="contactEmail"
          required
          onChange={onChange}
          onBlur={onBlur}
          value={formData?.contactEmail}
          aria-label={translations.labels.emailLabel}
          formGroupLabel={translations.labels.emailLabel}
          error={formErrors.contactEmail}
        />
        <InputField
          type="text"
          name="contactPhoneNumber"
          id="contactPhoneNumber"
          onChange={onChange}
          onBlur={onBlur}
          value={formData?.contactPhoneNumber}
          aria-label={translations.labels.phoneNumberLabel}
          formGroupLabel={translations.labels.phoneNumberLabel}
          error={formErrors.contactPhoneNumber}
        />

        <TextArea
          name="contactMessage"
          id="contactMessage"
          required
          onChange={onChange}
          onBlur={onBlur}
          value={formData?.contactMessage}
          aria-label={translations.labels.messageLabel}
          formGroupLabel={translations.labels.messageLabel}
          placeholder={translations.messagePlaceholder}
          characterCounter
          characterCounterLabels={{
            characters: translations.textAreaCharacters,
            charactersLeft: translations.textAreaCharacterLimit,
          }}
          error={formErrors.contactMessage}
          maxlength={500}
        />
        {recaptchaSitekey && (
          <GoogleRecaptcha
            touched
            error={formErrors.recaptcha}
            onChange={onRecaptchaChange}
            sitekey={recaptchaSitekey}
            locale={currentLanguage}
            innerRef={recaptchaRef}
          />
        )}
        <Button
          type="submit"
          variant="filled"
          fullWidth
          handleClick={handleClick}
          loader={buttonLoading}
          disabled={buttonLoading}
        >
          {translations.submitButtonText}
        </Button>
        {
          formErrors?.generalError
    && <Notice type="negative">{formErrors?.generalError}</Notice>
        }
      </form>
    </Modal>
  );
}

export default ConsultantContactForm;

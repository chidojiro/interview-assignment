import React from 'react';
import cn from 'classnames';
import GoogleRecaptcha from '../../forms/GoogleRecaptcha';
import Notice from '../../notifications/Notice';
import TextArea from '../../forms/TextArea';
import InputField from '../../forms/InputField';
import Button from '../../buttons/Button';
import Modal from '../../overlays/Modal';
import { ConsultantContactFormProps } from './ConsultantContactForm.types';

function ConsultantContactForm({
  modalOnClose, onSubmit, onChange, currentLanguage, buttonLoading, formData, formErrors, translations, recaptchaSitekey, onRecaptchaChange,
}: ConsultantContactFormProps) {
  const formGroupClass = 'form-group';

  const contactFirstNameClasses = cn(formGroupClass, { 'form-group--error': formErrors?.contactFirstName });
  const contactSurnameClasses = cn(formGroupClass, { 'form-group--error': formErrors?.contactSurname });
  const contactEmailClasses = cn(formGroupClass, { 'form-group--error': formErrors?.contactEmail });
  const contactMessageClasses = cn(formGroupClass, { 'form-group--error': formErrors?.contactMessage });
  const contactPhoneNumberClasses = cn(formGroupClass, { 'form-group--error': formErrors?.contactPhoneNumber });

  return (
    <Modal
      title={translations.modalTitle}
      onClose={modalOnClose}
    >
      <form
        onSubmit={onSubmit}
        noValidate
        name="contactForm"
        aria-label="contactForm"
      >
        <div className={contactFirstNameClasses}>
          <label
            htmlFor="contactFirstName"
            className="form-group__label"
          >
            {translations.labels.firstNameLabel}
          </label>
          <div className="form-group__input">
            <InputField
              type="text"
              name="contactFirstName"
              id="contactFirstName"
              required
              onChange={onChange}
              value={formData?.contactFirstName}
              aria-label={translations.labels.firstNameLabel}
            />
            {
              formErrors?.contactFirstName
        && (
          <div className="form-group__feedback">
            {formErrors?.contactFirstName}
          </div>
        )
            }
          </div>
        </div>
        <div className={contactSurnameClasses}>
          <label
            htmlFor="contactSurname"
            className="form-group__label"
          >
            {translations.labels.surnameLabel}
          </label>
          <div className="form-group__input">
            <InputField
              type="text"
              name="contactSurname"
              id="contactSurname"
              required
              onChange={onChange}
              value={formData?.contactSurname}
              aria-label={translations.labels.surnameLabel}
            />
            {
              formErrors?.contactSurname
        && (
          <div className="form-group__feedback">
            {formErrors?.contactSurname}
          </div>
        )
            }
          </div>
        </div>
        <div className={contactEmailClasses}>
          <label
            htmlFor="contactEmail"
            className="form-group__label"
          >
            {translations.labels.emailLabel}
          </label>
          <div className="form-group__input">
            <InputField
              type="email"
              name="contactEmail"
              id="contactEmail"
              required
              onChange={onChange}
              value={formData?.contactEmail}
              aria-label={translations.labels.emailLabel}
            />
            {
              formErrors?.contactEmail
        && (
          <div className="form-group__feedback">
            {formErrors?.contactEmail}
          </div>
        )
            }
          </div>
        </div>
        <div className={contactPhoneNumberClasses}>
          <label
            htmlFor="contactPhoneNumber"
            className="form-group__label"
          >
            {translations.labels.phoneNumberLabel}
            <span className="form-group__optional">
              {translations.labels.optionalLabel}
            </span>
          </label>
          <div className="form-group__input">
            <InputField
              type="text"
              name="contactPhoneNumber"
              id="contactPhoneNumber"
              onChange={onChange}
              value={formData?.contactPhoneNumber}
              aria-label={translations.labels.phoneNumberLabel}
            />
          </div>
          {
            formErrors?.contactPhoneNumber && (
              <div className="form-group__feedback">
                {formErrors.contactPhoneNumber}
              </div>
            )
          }
        </div>
        <div className={contactMessageClasses}>
          <label
            htmlFor="contactMessage"
            className="form-group__label"
          >
            {translations.labels.messageLabel}
          </label>
          <div className="form-group__input">
            <TextArea
              name="contactMessage"
              id="contactMessage"
              required
              onChange={onChange}
              value={formData?.contactMessage}
              aria-label={translations.labels.messageLabel}
              placeholder={translations.messagePlaceholder}
              characterCounter
              characterCounterLabels={{
                characters: translations.textAreaCharacters,
                charactersLeft: translations.textAreaCharacterLimit,
              }}
              maxlength={500}
            />
            {
              formErrors?.contactMessage
        && (
          <div className="form-group__feedback">
            {formErrors?.contactMessage}
          </div>
        )
            }
          </div>
        </div>
        {recaptchaSitekey && (
          <GoogleRecaptcha
            touched
            error={formErrors.recaptcha}
            onChange={onRecaptchaChange}
            sitekey={recaptchaSitekey}
            locale={currentLanguage}
          />
        )}
        <Button
          type="button"
          variant="filled"
          fullWidth
          handleClick={onSubmit}
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

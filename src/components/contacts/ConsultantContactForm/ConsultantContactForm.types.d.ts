import { CloseEvents } from "src/components/overlays/Modal/Modal.types";
import {GoogleRecaptchaRef} from "../../forms/GoogleRecaptcha/GoogleRecaptcha.types";

export interface ConsultantContactFormProps {
    modalOnClose: (event: CloseEvents) => void;
    onSubmit: (event: any) => any;
    onChange: (event: any) => void;
    handleClick?: (event: any) => void;
    onBlur?: (event: any) => void;
    currentLanguage: string
    buttonLoading: boolean;
    recaptchaSitekey: string;
    onRecaptchaChange: (token: string | null) => void;
    recaptchaRef: React.Ref<GoogleRecaptchaRef>;
    formData: {
        contactFirstName: string;
        contactSurname: string;
        contactPhoneNumber: string;
        contactMessage: string;
        contactEmail: string;
    };
    formErrors: {
        contactFirstName: string;
        contactSurname: string;
        contactMessage: string;
        contactEmail: string;
        contactPhoneNumber: string;
        generalError: string;
        recaptcha: string;
    };
    translations: {
        labels: {
            firstNameLabel: string;
            surnameLabel: string;
            emailLabel: string;
            phoneNumberLabel: string;
            optionalLabel: string;
            messageLabel: string;
        },
        modalTitle: string;
        messagePlaceholder: string,
        textAreaCharacters: string,
        textAreaCharacterLimit: string,
        submitButtonText: string,
    }
}

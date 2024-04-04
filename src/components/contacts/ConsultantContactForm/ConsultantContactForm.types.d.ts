import { CloseEvents } from "src/components/overlays/Modal/Modal.types";

export interface ConsultantContactFormProps {
    modalOnClose: (event: CloseEvents) => void;
    modalTitle: string;
    onSubmit: (event: any) => any;
    onChange: (event: any) => void;
    currentLanguage: string
    buttonLoading: boolean;
    recaptchaSitekey: string;
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
        generalError: string;
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
        messagePlaceholder: string,
        textAreaCharacters: string,
        textAreaCharacterLimit: string,
        submitButtonText: string,
        generalError: string,
    }
}
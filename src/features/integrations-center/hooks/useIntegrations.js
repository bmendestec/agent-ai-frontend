import { useState } from "react";

export function useIntegrations() {
    const [formIntegration, setFormIntegration] = useState({
        phoneNumber: '',
        message: '',
    });

    const applyPhoneMask = (value) => {
        // Remove caracteres não numéricos
        value = value.replace(/\D/g, '');

        // Aplica a máscara (exemplo: +55 (44) 99999-9999)
        if (value.length > 2) {
            value = `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4, 9)}-${value.slice(9, 13)}`;
        } else if (value.length > 0) {
            value = `+${value}`;
        }

        return value;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const maskedValue = name === 'phoneNumber' ? applyPhoneMask(value) : value;
        setFormIntegration({ ...formIntegration, [name]: maskedValue });
    }

    const handleSaveIntegration = () => {
        const rawPhoneNumber = formIntegration.phoneNumber.replace(/\D/g, '');
        handleIntegration(rawPhoneNumber, formIntegration.message);
    }

    const handleIntegration = (phoneNumber, message) => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
    }

    return { handleChange, handleSaveIntegration, formIntegration }
}
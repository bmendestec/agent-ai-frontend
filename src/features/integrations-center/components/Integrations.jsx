import { ArrowUpDown } from "lucide-react";
import { Button } from "../../../components/common/button";
import './integrations.css';
import { useIntegrations } from "../hooks/useIntegrations";

export default function Integrations() {

    const { handleChange, handleSaveIntegration, formIntegration } = useIntegrations();

    return (
        <>
            <div className="title">
                <h1>Integrations!</h1>
            </div>
            <div className="integration-form">
                <form onSubmit={handleSaveIntegration}>
                    {/* <select name="integration" id="integration_key">
                        <option value="">---</option>
                        <option value="WB">What's up business</option>
                    </select> */}
                    <input
                        type="text"
                        placeholder="Phone number. Ex: '5544999999999'"
                        name="phoneNumber"
                        onChange={handleChange}
                        value={formIntegration.phoneNumber} />
                    <input
                        type="text"
                        placeholder="Default message. Ex: Hi, I want to know more details about the product!"
                        name="message"
                        onChange={handleChange}
                        value={formIntegration.message} />
                    <Button
                        type='submit'
                        variant="int"
                    >
                        <ArrowUpDown />
                        Integrar
                    </Button>
                </form>
            </div>
        </>
    )
}
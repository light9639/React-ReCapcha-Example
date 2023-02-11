import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha2 = () => {
    const recaptchaRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;

    const onSubmitWithReCAPTCHA = async () => {
        const token = await recaptchaRef.current.executeAsync();
    }

    return (
        <form onSubmit={onSubmitWithReCAPTCHA}>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_V2_KEY}
            />
        </form>
    )

}

export default Captcha2
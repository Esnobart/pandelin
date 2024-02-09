import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId, useState } from 'react';

export const EmailForm = () => {
    const emailId = useId();
    const [success, setSuccess] = useState(false);

    const onAdd = (values) => {
        const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
        if (storedEmails.includes(values.email)) {
            setSuccess(false);
            throw new Error('This email is already subscribed!');
        }
        const newEmails = [...storedEmails, values.email];
        localStorage.setItem('emails', JSON.stringify(newEmails));
        setSuccess(true);
    };

    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={(values, actions) => {
                try {
                    onAdd(values);
                    actions.resetForm();
                } catch (error) {
                    actions.setFieldError('email', error.message);
                }
            }}>
            <Form autoComplete='off'>
                <label htmlFor={emailId}>Subscribe to receive news
                    <div className="input-email">
                        <Field type="email" name="email" id={emailId} placeholder="email" />
                        
                        <button type="submit" className="btn">Subscribe</button>
                    </div>
                </label>
                <ErrorMessage name="email" component="p" className="error" />
                {success && <p className="success-message">Successfully subscribed!</p>}
            </Form>
        </Formik>
    )
}
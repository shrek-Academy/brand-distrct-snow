import { useState } from "react";
import { Form } from "antd";

const FormInput = (props) => {
    const [focus, setFocus] = useState(true);
    const { children, label, name } = props;

    const value = document?.querySelector(
        `input#basic_${name}:not(:placeholder-shown)`
    );

    const labelClass =
        focus || (value && value.length !== 0) ? "label label-float" : "label";

    return (
        <div className="float-label">
            <Form.Item
                {...props}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
            >
                {{
                    ...children,
                    props: {
                        ...children.props,
                        placeholder: props.placeholder || props.label,
                    },
                }}
            </Form.Item>
            <span className={labelClass}>{label}</span>
        </div>
    );
};

export default FormInput;

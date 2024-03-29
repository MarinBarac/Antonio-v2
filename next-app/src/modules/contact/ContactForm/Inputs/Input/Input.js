import clsx from "clsx";
import { Controller } from "react-hook-form";
import styles from "./Input.module.scss";
import { useState } from "react";

const Input = ({
  control,
  name,
  rules,
  type,
  label,
  value,
  trigger,
  formSubmitted,
  error,
  setFocus,
}) => {
  const [inputFocused, setInputFocused] = useState(false);
  const containerClass = clsx({
    [styles.container]: true,
    [styles.active]: inputFocused || !!value,
    [styles.showError]: error,
  });

  const handleBlur = () => {
    setInputFocused(false);
    trigger && trigger(name);
  };

  const handleChange = () => {
    if (error && !formSubmitted) {
      trigger(name);
    }
  };
  return (
    <div className={containerClass}>
      <div
        className={styles.inputContainer}
        onClick={() => {
          setFocus(name);
        }}
      >
        <label htmlFor={name} className={styles.label}>
          <p>{label}</p>
        </label>
        <Controller
          control={control}
          name={name}
          rules={{ ...rules }}
          render={({ field: { onChange, value, ref, onBlur } }) => (
            <input
              type={type}
              onChange={(e) => {
                handleChange();
                onChange(e);
              }}
              placeholder=" "
              onFocus={() => setInputFocused(true)}
              value={value}
              ref={ref}
              className={styles.input}
              onBlur={(e) => {
                onBlur(e);
                handleBlur();
              }}
            />
          )}
        />
      </div>
      <label className={styles.error}>{error?.message}</label>
    </div>
  );
};

export default Input;

import { useState } from "react";
import { Controller } from "react-hook-form";
import styles from "./Textarea.module.scss";
import clsx from "clsx";

const Textarea = ({
  control,
  name,
  rules,
  label,
  value,
  trigger,
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

  return (
    <div
      className={containerClass}
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
        render={({ field: { onChange, value, ref, onBlur, name } }) => (
          <textarea
            name={name}
            rows="5"
            onChange={onChange}
            onFocus={() => setInputFocused(true)}
            value={value}
            ref={ref}
            className={styles.textarea}
            onBlur={(e) => {
              onBlur(e);
              handleBlur();
            }}
          />
        )}
      />
      <label className={styles.error}>{error?.message}</label>
    </div>
  );
};

export default Textarea;

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const AutoSuggest = ({
  name,
  label,
  id,
  required,
  values,
  defaultValue,
  setValue,
  changeCb,
  separator = ",",
  ...props
}) => {
  const [input, set_input] = useState(defaultValue);
  const [menu_open, set_menu_open] = useState(false);
  const ref = useRef();

  const on_change = (e) => {
    console.log(e.target.value);
    set_menu_open(true);
    set_input(e.target.value);
    changeCb(e.target.value);
  };

  const on_item_mouse_enter = (e) =>
    e.target.classList.add("select-menu__item--preselect");

  const on_item_mouse_leave = (e) =>
    e.target.classList.remove("select-menu__item--preselect");

  const on_item_click = (e) => {
    const text = e.target.innerText;
    set_input(text);
    set_menu_open(false);
    setValue(text);
  };

  useEffect(() => {

    document.addEventListener('click', (e) => {
      if (!ref.current) return;
      // if clicked outside input field or list, close the list and do not select item
			if (!ref.current.contains(e.target) && ref.current.classList.contains('select-menu--open')) {
        set_menu_open(false)
			}
		})
  }, [])

  return (
    <div ref={ref}
      className={`form-group__input ${
        menu_open === true ? "select-menu--open" : ""
      }`}
    >
      <input
        {...props}
        id={id || name}
        name={name}
        type="text"
        value={input}
        onChange={on_change}
      />
      <ul className="select-menu__list">
        {values.length > 0 &&
          values.map((item, i) => {
            let regex = new RegExp(input, 'gi');
            let response = item.replace(regex, function (value) {
              return `<mark>${value}</mark>`;
            });

            return (
              <li
                className="select-menu__item"
                key={i}
                onMouseEnter={on_item_mouse_enter}
                onMouseLeave={on_item_mouse_leave}
                onClick={on_item_click}
                dangerouslySetInnerHTML={{ __html: response}}
              />
            );
          })}
      </ul>
    </div>
  );
};

AutoSuggest.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  changeCb: PropTypes.func,
  setValue: PropTypes.func,
};

AutoSuggest.displayName = "auto-suggest";

export default withFieldGroup(AutoSuggest);

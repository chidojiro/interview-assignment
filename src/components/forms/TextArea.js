import React from "react";
import t from "prop-types";
import cn from "classnames";

import withField from "@hoc/withField";
import useLibrary from "@hooks/useLibrary";

const defaultCharacterCounterLabels = {
  characters: "characters",
  charactersLeft: "@characters characters left",
};

/**
 * A field to enter large datasets in a pre defined format. See [here](https://randstad.design/components/core/forms/text-area/)
 *
 * ---
 * *Every other passed props will be added to `<textarea>`. Like "data-attribute" and "aria-label"*
 */
const TextArea = ({
  autoResize = true,
  characterCounter,
  expanded,
  libs,
  characterCounterLabels = {},
  maxlength = 250,
  ...props
}) => {
  const [ref] = useLibrary(libs);

  const characterCounterAttributes = characterCounter
    ? {
        "data-rs-character-counter-maxlength": maxlength,
        "data-rs-character-counter": props.name,
        "data-maxlength": maxlength,
        "data-rs-character-counter-labels": JSON.stringify({
          ...defaultCharacterCounterLabels,
          ...characterCounterLabels,
        }),
      }
    : {};

  const autoResizeAttributes = autoResize
    ? {
        "data-rs-auto-resize": "",
      }
    : {};

  const expandedAttributes = autoResize
    ? {
        "data-rs-textarea": "expand",
        rows: "1",
      }
    : {};

  return (
    <>
      <div
        className={cn("form-group__input", {
          "form-group__character-count": characterCounter,
        })}>
        <textarea
          {...props}
          className={cn({
            "fixed-size": !autoResize,
            "textarea--expand": expanded,
          })}
          data-scl=""
          ref={ref}
          {...characterCounterAttributes}
          {...expandedAttributes}
          {...autoResizeAttributes}></textarea>
      </div>
      {characterCounter && (
        <div className="form-group__characters" data-rs-character-counter-output={props.name}></div>
      )}
    </>
  );
};

TextArea.propTypes = {
  /** Enable text area auto resize. */
  autoResize: t.bool,
  /** Enable character count. */
  characterCounter: t.bool,
  /** Enable extend view. */
  expanded: t.bool,
  /** Labels for character count. Some has a placeholder. Overrides the default one. */
  characterCounterLabels: t.shape({
    characters: t.string,
    charactersLeft: t.string,
  }),
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time.
   * Required libraries for this component
   * - character-count
   * - auto-resize
   * - textarea
   */
  libs: t.array,
  /** Set text area max length */
  maxlength: t.number,
  /** @ignore Part of input HTML props. */
  name: t.string,
};

export default withField(TextArea);

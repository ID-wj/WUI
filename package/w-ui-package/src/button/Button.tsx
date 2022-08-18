import { defineComponent, PropType, ref } from "vue";
import "uno.css";
// import { } from "roughjs";
import { useElementSize } from "@w-ui/hooks";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String,
    default: "",
  },
};
export default defineComponent({
  name: "WButton",
  props,
  setup(props, { slots }) {
    const button = ref(null);
    const { width, height } = useElementSize(button);

    return () => (
      <button
        class={`
          relative
          inline-block
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-block 
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        <div
          ref={button}
          class={`
            absolute
            inset-0
          `}
        >
          <svg width={width.value} height={height.value}></svg>
        </div>
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});

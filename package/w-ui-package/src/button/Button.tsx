import { computed, defineComponent, PropType, ref, watch } from "vue";
import "uno.css";
import rough from "roughjs";
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

export type ISize = "large" | "medium" | "small";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String,
    default: "",
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
};

const TextSize = {
  large: "lg",
  medium: "sm",
  small: "xs",
};
export default defineComponent({
  name: "WButton",
  props,
  setup(props, { slots }) {
    const textSize = computed(() => {
      return TextSize[props.size];
    });
    const button = ref(null);
    const svg = ref(null);
    const { width, height } = useElementSize(button);
    watch(
      () => [width, height],
      () => {
        draw();
      },
      {
        deep: true,
      }
    );
    //绘制svg 边框加背景
    const draw = () => {
      svg.value.innerHTML = "";
      const rc = rough.svg(svg.value);
      let node = rc.rectangle(1, 1, width.value - 2, height.value - 2, {
        fill: `${props.color}`,
      });
      svg.value.appendChild(node);
    };
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
          bg-transparent
          hover:bg-${props.color}-4
          hover:bg-op-50
          border-none 
          cursor-pointer 
          text-${textSize.value}
          `}
      >
        <div
          ref={button}
          class={`
            absolute
            inset-0
            pointer-events-none
            -z-1
          `}
        >
          <svg ref={svg} width={width.value} height={height.value}></svg>
        </div>
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}

        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});

import { onBeforeUnmount, onMounted, ref, Ref } from 'vue'

export interface ElementSize {
  width: Ref<number>,
  height: Ref<number>
}

export function useElementSize(target: Ref<HTMLElement | null>): ElementSize {
  const width = ref(0)
  const height = ref(0)

  let resizeObserver: ResizeObserver | null

  /**
   * 清除resizeObserver
   */
  const clean = () => {
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }
  }

  onMounted(() => {
    //开启监听
    if (target.value) {
      resizeObserver = new ResizeObserver(([entry]) => {
        width.value = entry.contentRect.width
        height.value = entry.contentRect.height
      })
      resizeObserver.observe(target.value)
    }
  })

  onBeforeUnmount(() => {
    clean()
  })

  return {
    width,
    height
  }
}
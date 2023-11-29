import { ref } from 'vue'

const useProduct = () => {
  const name = ref<string>('')
  const price = ref<number>(0)
  const isAvailable = ref<boolean>(true)

  const submit = () => {
    console.log({
      name: name.value,
      price: price.value,
      isAvailable: isAvailable.value
    })
  }

  return {
    name,
    price,
    isAvailable,
    submit
  }
}

export default useProduct

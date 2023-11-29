import type { Product } from '@/interfaces/Product'
import router from '@/router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Curso de Vue.js desde cero',
    price: 20,
    isAvailable: true
  },
  {
    id: 2,
    name: 'Curso de React.js desde cero',
    price: 20,
    isAvailable: true
  },
  {
    id: 3,
    name: 'Curso de Angular desde cero',
    price: 20,
    isAvailable: true
  },
  {
    id: 4,
    name: 'Curso de HTML desde cero',
    price: 20,
    isAvailable: true
  }
])

const useProduct = () => {
  const router = useRouter()

  const name = ref<string>('')
  const price = ref<number>(0)
  const isAvailable = ref<boolean>(true)

  const submit = () => {
    const p = {
      id: products.value.length + 1,
      name: name.value,
      price: price.value,
      isAvailable: isAvailable.value
    }
    console.log(p)

    products.value.push(p)

    router.push('/')
  }

  return {
    products,
    name,
    price,
    isAvailable,
    submit
  }
}

export default useProduct

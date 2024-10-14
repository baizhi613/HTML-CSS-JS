import { defineStore } from "pinia";
import{ref ,computed} from 'vue'

export const useStockStore=defineStore('stock',()=>{
    const stock=ref(20)
    function setStock(val){
        stock.value=val
    }
    function addStock(){
        stock.value++
    }
    const doubleStock=computed(()=>{
        return stock.value*2
    })
    function subStock(){
        stock.value--
    }
    return{
        stock,
        setStock,
        addStock,
        subStock,
        doubleStock
    }
})
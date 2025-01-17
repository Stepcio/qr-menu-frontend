<template>
    <div class="rounded-3xl h-[80px] p-[1px] w-full md:w-[40%] mx-auto md:mx-0">
        <div class="flex h-full w-full bg-dim rounded-3xl">
            <div class="relative h-full aspect-square">
                <img v-if="item.photo" :src="item.photo" alt="menu-item" class="rounded-3xl" />
                <div v-else class="">

                </div>
            </div>
            <div class="w-[55%] p-2 mx-[5%] font-bold rounded-3xl">
                {{ item.name }}
                <div class="font-light overflow-hidden text-ellipsis whitespace-nowrap">
                <template v-if="item.ingredients">
                    {{ item.ingredients.join(', ') }}
                </template>
                </div>
            </div>
            <template v-if="!preview">
                <div class="w-[10%] ml-auto my-auto mr-2">
                <AddToOrderButton :item-id="item.id" />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import AddToOrderButton from "../orders/AddToOrderButton.vue";

defineProps({
    item: {
        type: Object,
        required: true,
    },
    preview: {
        type: Boolean,
        default: false,
    },
});
</script>
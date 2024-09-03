<template>
    <div>
        <div class="bg-[#f0f0f0] px-10 md:px-0">
            <div class="container mx-auto">
                <div class="py-10">
                    <div data-aos="fade-down">
                        <div class="mb-10">
                            <div class="flex justify-center">
                                <nuxt-img src="/nano/images/banner-products-services.png" class="rounded-2xl" />
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="mb-4">
                                <div class="text-[32px] text-sbi-primary font-semibold">
                                    Our Featured Products and Services
                                </div>
                            </div>
                            <div>
                                <div class="mb-2">
                                    <div class="text-sm text-sbi-black font-normal">
                                        Discover comprehensive financial solutions designed to meet all your needs,
                                    </div>
                                </div>
                                <div class="text-sm text-sbi-black font-normal">
                                    from savings to investments
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="pt-[72px] pb-10">
                    <div class="mb-10">
                        <div class="grid md:grid-cols-3 gap-x-6">
                            <div v-for="(item, index) of listProducts" :key="index"
                                @click="onSelectedProduct(item.name)">
                                <div class="cursor-pointer rounded-2xl p-6 hover:border hover:border-sbi-primary mb-5 md:mb-0"
                                    :class="item.name === isActiveProduct ? 'bg-sbi-primary' : 'bg-[#F9FAFB]'">
                                    <div class="mb-2">
                                        <div class="text-[26px] font-semibold"
                                            :class="item.name === isActiveProduct ? 'text-white' : 'text-sbi-primary'">
                                            {{ item.name }}
                                        </div>
                                    </div>
                                    <div class="text-sm font-normal leading-7"
                                        :class="item.name === isActiveProduct ? 'text-white' : 'text-sbi-primary'">
                                        {{ item.desc }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="grid md:grid-cols-4 gap-6">
                            <div v-for="(item, index) of listSubSelectedProduct" :key="index">
                                <div class="bg-[#F9FAFB] rounded-2xl h-full p-6 mb-3 md:mb-0">
                                    <div class="text-center mb-4">
                                        <div class="mb-4">
                                            <div class="text-[22px] text-sbi-black font-medium">
                                                {{ item.name }}
                                            </div>
                                        </div>
                                        <button type="button" class="border rounded-full w-full p-2">
                                            <div class="text-sm text-sbi-black font-normal">
                                                See Detail
                                            </div>
                                        </button>
                                    </div>
                                    <div class="mb-4">
                                        <div class="text-sm text-sbi-black font-medium leading-7 text-justify">
                                            {{ item.desc }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="grid grid-cols-1 gap-y-2">
                                            <div v-for="(item, index) of new Array(item.array)" :key="index">
                                                <div class="flex gap-x-1 items-center">
                                                    <div>
                                                        <nuxt-img src="/nano/icons/check.svg" />
                                                    </div>
                                                    <div>
                                                        <div class="text-sm text-sbi-black font-normal">
                                                            Lorem ipsum dolor sit
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="pt-[72px] pb-10">
                    <NewsEvents />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import NewsEvents from '@/components/NewsEvents.vue';

    export default {
        components: {
            'NewsEvents': NewsEvents
        },
        data() {
            return {
                listProducts: [{
                        name: 'Deposit Products',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis, placeat excepturi ratione a rem.'
                    },
                    {
                        name: 'Loan Products',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis, placeat excepturi ratione a rem.'
                    },
                    {
                        name: 'Other Products',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis, placeat excepturi ratione a rem.'
                    }
                ],
                listDepositProducts: [{
                        name: 'Current Account',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'Saving Account',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 4
                    },
                    {
                        name: 'Time Deposit',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 3
                    },
                    {
                        name: 'Interest Calculation Method',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 6
                    }
                ],
                listLoanProducts: [{
                        name: 'Letter of Credit',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 7
                    },
                    {
                        name: 'Term of Loan',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 4
                    },
                    {
                        name: 'Demand Loan',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 4
                    },
                    {
                        name: 'PRK/Demand',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 4
                    },
                    {
                        name: 'KPR/KPK',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'Domestic Letter of Credit',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'Overdraft Facility',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'SBLC',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 3
                    },
                    {
                        name: 'Export Credit',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 2
                    },
                    {
                        name: 'Back to Back',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 3
                    }
                ],
                listOtherProducts: [{
                        name: 'Bank Reference',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 2
                    },
                    {
                        name: 'Safe Deposit Box',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 6
                    },
                    {
                        name: 'Bank Guarantee',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 6
                    },
                    {
                        name: 'Clearing',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 4
                    },
                    {
                        name: 'BI RTGS',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'Transfer SKNBI',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'ATM',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 3
                    },
                    {
                        name: 'Phone Banking',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'SMS Banking',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    },
                    {
                        name: 'Internet Banking',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi eligendi beatae amet, delectus cumque omnis',
                        array: 5
                    }
                ],
                isActiveProduct: 'Deposit Products',
                listSubSelectedProduct: []
            }
        },
        mounted() {
            this.listSubSelectedProduct = this.listDepositProducts;
        },
        methods: {
            onSelectedProduct(name) {
                this.isActiveProduct = name;

                if (name === 'Deposit Products') {
                    this.listSubSelectedProduct = this.listDepositProducts;
                }

                if (name === 'Loan Products') {
                    this.listSubSelectedProduct = this.listLoanProducts;
                }

                if (name === 'Other Products') {
                    this.listSubSelectedProduct = this.listOtherProducts;
                }
            }
        }
    }

</script>

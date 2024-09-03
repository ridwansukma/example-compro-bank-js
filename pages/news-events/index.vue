<template>
    <div>
        <div class="bg-[#f0f0f0] px-10 md:px-0">
            <div class="container mx-auto">
                <div class="py-10">
                    <div data-aos="fade-down">
                        <div class="mb-10">
                            <div class="flex justify-center">
                                <nuxt-img src="/nano/images/banner-news-events.png" class="rounded-2xl" />
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="mb-4">
                                <div class="text-[32px] text-sbi-primary font-semibold">
                                    New and Events
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
                    <div class="grid md:grid-cols-4 gap-6">
                        <div v-for="(item, index) of listNews" :key="index" class="cursor-pointer mb-5 md:mb-0" data-aos="fade-up">
                            <div class="mb-4">
                                <div>
                                    <nuxt-img :src="item.thumbnail" />
                                </div>
                            </div>
                            <div>
                                <div class="mb-2">
                                    <div class="flex">
                                        <div class="bg-sbi-black rounded-lg w-auto py-1 px-3">
                                            <div class="text-base text-white font-normal">
                                                {{ item.category }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-base text-sbi-black font-medium leading-7">
                                        {{ item.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                listNews: [{
                        thumbnail: '/images/thumbnail-news-1.png',
                        category: 'Product News',
                        title: 'Exporting the Latest Financial Trends and Theit Impact on Your Investments and Savings'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-2.png',
                        category: 'Company News',
                        title: 'Get unsights into the Economics Report and what it means for your future financial planning'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-3.png',
                        category: 'Tips and Trick',
                        title: 'Explore our expert analysis on New Banking Product/Service and how it can benefit you'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-4.png',
                        category: 'Announcement',
                        title: 'Understand the implications of Global Financial Event on the local market and your personal finances'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-1.png',
                        category: 'Product News',
                        title: 'Exporting the Latest Financial Trends and Theit Impact on Your Investments and Savings'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-2.png',
                        category: 'Company News',
                        title: 'Get unsights into the Economics Report and what it means for your future financial planning'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-3.png',
                        category: 'Tips and Trick',
                        title: 'Explore our expert analysis on New Banking Product/Service and how it can benefit you'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-4.png',
                        category: 'Announcement',
                        title: 'Understand the implications of Global Financial Event on the local market and your personal finances'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-1.png',
                        category: 'Product News',
                        title: 'Exporting the Latest Financial Trends and Theit Impact on Your Investments and Savings'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-2.png',
                        category: 'Company News',
                        title: 'Get unsights into the Economics Report and what it means for your future financial planning'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-3.png',
                        category: 'Tips and Trick',
                        title: 'Explore our expert analysis on New Banking Product/Service and how it can benefit you'
                    },
                    {
                        thumbnail: '/images/thumbnail-news-4.png',
                        category: 'Announcement',
                        title: 'Understand the implications of Global Financial Event on the local market and your personal finances'
                    }
                ],
            }
        }
    }

</script>

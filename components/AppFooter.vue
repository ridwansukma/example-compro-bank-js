<template>
    <div>
        <div class="container mx-auto">
            <div class="pt-[72px] pb-10 border-y-[1.2px] border-[#E6E6E6]">
                <div data-aos="fade-up">
                    <div class="mb-10">
                        <ul class="flex flex-wrap-reverse gap-x-14 px-10 md:px-0">
                            <li v-for="(item, index) of listMenuMain" :key="index">
                                <nuxt-link :to="item.link">
                                    <div class="text-base text-sbi-black font-medium hover:text-[#0052B4] mb-5 md:mb-0">
                                        {{ item.name }}
                                    </div>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="grid md:grid-cols-5 px-10 md:px-0">
                            <div v-for="(item, index) of listMenuOther" :key="index">
                                <div class="mb-4 mt-5 md:mt-0">
                                    <div class="text-sm text-sbi-black font-semibold">
                                        {{ item.name }}
                                    </div>
                                </div>
                                <ul>
                                    <li v-for="(child, index) of item.child" :key="index" class="mb-4">
                                        <nuxt-link :to="child.link">
                                            <div
                                                class="text-sm text-sbi-secondary font-normal hover:text-[#0052B4] transition ease-in-out hover:translate-x-2">
                                                {{ child.name }}
                                            </div>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container mx-auto">
            <div class="py-10 px-10 md:px-0">
                <div class="grid md:grid-cols-2">
                    <div data-aos="fade-right" class="flex flex-col justify-center items-center">
                        <div class="mb-6">
                            <nuxt-img src="/Logo-SBII-Footer.svg" />
                        </div>
                        <div>
                            <div class="mb-2">
                                <div class="text-sm text-sbi-black font-normal">
                                    Gedung Graha Mandiri Lantai 11,15 & 24
                                </div>
                            </div>
                            <div class="mb-2">
                                <div class="text-sm text-sbi-black font-normal">
                                    Jl. Imam Bonjol No.51
                                </div>
                            </div>
                            <div class="text-sm text-sbi-black font-normal">
                                Jakarta Pusat 10310
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <div class="flex items-center justify-center md:justify-end mt-10 md:mt-0">
                            <div class="flex gap-x-6">
                                <div>
                                    <div class="bg-sbi-primary rounded-full h-12 w-12">
                                        <a href="https://www.facebook.com" target="_blank">
                                            <div class="flex justify-center items-center h-full">
                                                <nuxt-img src="/images/social-media/fb.svg" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="bg-sbi-primary rounded-full h-12 w-12">
                                        <a href="https://www.linkedin.com" target="_blank">
                                            <div class="flex justify-center items-center h-full">
                                                <nuxt-img src="/images/social-media/linkin.svg" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="bg-sbi-primary rounded-full h-12 w-12">
                                        <a href="https://www.instagram.com" target="_blank">
                                            <div class="flex justify-center items-center h-full">
                                                <nuxt-img src="/images/social-media/ig.svg" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="bg-sbi-primary rounded-full h-12 w-12">
                                        <a href="https://x.com" target="_blank">
                                            <div class="flex justify-center items-center h-full">
                                                <nuxt-img src="/images/social-media/x.svg" />
                                            </div>
                                        </a>
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
                listMenuMain: [{
                        name: 'Home',
                        link: '/'
                    },
                    {
                        name: 'Contact Us',
                        link: '/'
                    },
                    {
                        name: 'Carrer',
                        link: '/'
                    },
                    {
                        name: 'Sitemap',
                        link: '/'
                    },
                    {
                        name: 'Disclaimer',
                        link: '/'
                    },
                    {
                        name: 'E-channel',
                        link: '/'
                    }
                ],
                listMenuOther: [{
                        name: 'About Us',
                        child: [{
                                name: 'Brand Locator',
                                link: '/'
                            },
                            {
                                name: 'Vision & Mision',
                                link: '/'
                            },
                            {
                                name: 'Organization Structure',
                                link: '/'
                            },
                            {
                                name: 'Company Profile',
                                link: '/'
                            },
                            {
                                name: 'Whistle Blowing System',
                                link: '/'
                            },
                            {
                                name: 'Financial Statement',
                                link: '/'
                            }
                        ]
                    },
                    {
                        name: 'Product',
                        child: [{
                                name: 'Deposit Product',
                                link: '/'
                            },
                            {
                                name: 'Loan Product',
                                link: '/'
                            },
                            {
                                name: 'Other',
                                link: '/'
                            }
                        ]
                    },
                    {
                        name: 'Interest',
                        child: [{
                                name: 'Rate',
                                link: '/'
                            },
                            {
                                name: 'Charges',
                                link: '/'
                            }
                        ]
                    },
                    {
                        name: 'Customer',
                        child: [{
                                name: 'Customer Complaint Form',
                                link: '/'
                            },
                            {
                                name: 'Suggestion or Feedback',
                                link: '/'
                            }
                        ]
                    },
                    {
                        name: 'Contact Us',
                        child: [{
                                name: 'Contact Information',
                                link: '/'
                            },
                            {
                                name: 'Branch Locator',
                                link: '/'
                            }
                        ]
                    }
                ]
            }
        },
    }

</script>

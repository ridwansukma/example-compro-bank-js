<template>
    <div>
        <div class="bg-no-repeat" style="background-image: url('/nano/aurora.png');">
            <div class="h-[89vh]">
                <div class="container mx-auto h-full relative">
                    <div class="flex justify-center">
                        <div class="absolute top-[365px]">
                            <div id="compas">
                                <nuxt-img src="/nano/compas.png" class="w-[1200px]" />
                            </div>
                        </div>
                        <div class="absolute top-10">
                            <nuxt-img src="/nano/main.png" />
                            <div class="absolute top-[210px]">
                                <div class="text-center">
                                    <div class="mb-4">
                                        <div class="text-[40px] text-gradient font-bold">
                                            Modern Banking
                                        </div>
                                        <div class="text-[40px] text-gradient font-bold">
                                            A Bright Future
                                        </div>
                                    </div>
                                    <div class="text-2xl text-gradient font-bold">
                                        A reliable banking solution for all your financial needs
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-[130px] md:bottom-[270px] w-full z-20">
                        <div>
                            <div class="grid grid-cols-3">
                                <div>
                                    <div id="badge-1">
                                        <div class="flex justify-end mt-16">
                                            <div class="bg-white rounded-2xl py-3 pr-7 pl-4">
                                                <div class="flex gap-x-2 items-center">
                                                    <div>
                                                        <nuxt-img src="/nano/icons/banner-badge-1.svg" />
                                                    </div>
                                                    <div>
                                                        <div class="text-base text-sbi-primary font-medium">
                                                            Save
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-center gap-x-32">
                                        <div id="badge-2">
                                            <div class="bg-sbi-primary rounded-2xl py-3 pr-7 pl-4">
                                                <div class="flex gap-x-2 items-center">
                                                    <div>
                                                        <nuxt-img src="/nano/icons/banner-badge-2.svg" />
                                                    </div>
                                                    <div>
                                                        <div class="text-base text-white font-medium">
                                                            Spend
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="badge-3">
                                            <div class="bg-white rounded-2xl py-3 pr-7 pl-4">
                                                <div class="flex gap-x-2 items-center">
                                                    <div>
                                                        <nuxt-img src="/nano/icons/banner-badge-3.svg" />
                                                    </div>
                                                    <div>
                                                        <div class="text-base text-sbi-primary font-medium">
                                                            Impact
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-start mt-16">
                                        <div id="badge-4">
                                            <div class="bg-sbi-primary rounded-2xl py-3 pr-7 pl-4">
                                                <div class="flex gap-x-2 items-center">
                                                    <div>
                                                        <nuxt-img src="/nano/icons/banner-badge-4.svg" />
                                                    </div>
                                                    <div>
                                                        <div class="text-base text-white font-medium">
                                                            Invest
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
            
            <div class="sbi-overlay"></div>

            <div class="bg-gradient relative z-10">
                <div class="h-auto mb-20 md:mb-0 md:h-screen">
                    <div class="container mx-auto h-full">
                        <div class="mb-8">
                            <div class="grid grid-cols-3 justify-center">
                                <div class="flex justify-center items-end">
                                    <div id="person-l">
                                        <nuxt-img src="/nano/person-l.png" />
                                    </div>
                                </div>
                                <div class="flex justify-center">
                                    <nuxt-img src="/nano/mobile.png" />
                                </div>
                                <div class="flex justify-center items-end">
                                    <div id="person-r">
                                        <nuxt-img src="/nano/person-r.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center px-10 md:px-0">
                            <div>
                                <div class="text-[40px] text-white font-medium">
                                    Social Banking For
                                </div>
                            </div>
                            <div class="mb-4">
                                <div id="animationText" class="text-[40px] md:text-[80px] text-white font-medium"></div>
                            </div>
                            <div>
                                <div class="text-[20px] text-white font-normal">
                                    <div class="mb-2">
                                        Find out more about the latest sharia solutions and start the journey
                                    </div>
                                    <div>
                                        financially with us. Learn more now!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="h-auto mb-20 md:mb-0 md:h-screen">
                    <div class="container mx-auto h-full">
                        <div class="mb-8">
                            <div class="text-center px-10 md:px-0">
                                <div>
                                    <div class="text-[40px] text-white font-medium">
                                        SBI Indonesia was born
                                    </div>
                                </div>
                                <div>
                                    <div class="text-[60px] md:text-[80px] text-white font-medium">
                                        Human Digital
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="hidden md:grid grid-cols-2">
                                <div class="flex overflow-x-hidden">
                                    <div id="comb-l">
                                        <nuxt-img src="/nano/comb-l.png" class="w-[700px]" />
                                    </div>
                                    <div class="col-span-3 flex items-center justify-center">
                                        <div id="combText-l" class="text-[32px] text-white font-medium text-center">
                                            <div>
                                                Combination
                                            </div>
                                            <div>
                                                Sophistication
                                            </div>
                                            <div>
                                                Teknologi
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex overflow-x-hidden">
                                    <div class="col-span-3 flex items-center justify-center">
                                        <div id="combText-r" class="text-[32px] text-white font-medium text-center">
                                            <div>
                                                Meet
                                            </div>
                                            <div>
                                                Human
                                            </div>
                                            <div>
                                                Friendliness
                                            </div>
                                        </div>
                                    </div>
                                    <div id="comb-r" class="overflow-hidden">
                                        <nuxt-img src="/nano/comb-r.png" class="w-[700px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="h-auto mb-20 md:mb-0 md:h-screen">
                    <div class="container mx-auto h-full">
                        <div class="mb-8">
                            <div class="text-center">
                                <div>
                                    <div class="text-[40px] text-white font-medium">
                                        SBI Indonesia
                                    </div>
                                </div>
                                <div>
                                    <div class="text-[60px] md:text-[80px] text-white font-medium">
                                        <div>
                                            Making Digital
                                        </div>
                                        <div>
                                            Banking Becomes
                                        </div>
                                        <div>
                                            Personal Again.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div class="h-auto mb-20 md:mb-0 md:h-screen">
                    <div class="container mx-auto h-full">
                        <div class="mb-8 px-10 md:px-0">
                            <div class="text-center">
                                <div>
                                    <div class="text-[40px] text-white font-medium">
                                        Latest Innovation From
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="bg-white rounded-2xl p-4">
                                <nuxt-img src="/Logo-SBII.svg" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="h-auto mb-20 md:mb-0 md:h-screen">
                    <div class="container mx-auto h-full">
                        <div class="mb-8 px-10 md:px-0">
                            <div class="text-center">
                                <div>
                                    <div class="text-[40px] text-white font-medium">
                                        <div>
                                            Grow financially
                                        </div>
                                        <div>
                                            You, with a Kindness Score
                                        </div>
                                        <div>
                                            SBI Indonesia
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div class="pb-[72px]">
                    <div class="container mx-auto h-full">
                        <div class="mb-10 px-10 md:px-0">
                            <div class="text-center">
                                <div class="mb-4">
                                    <div class="text-[40px] text-white font-medium">
                                        <div>
                                            4 Optional Steps
                                        </div>
                                        <div>
                                            Towards Goodness
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-[20px] text-white font-normal">
                                        <div class="mb-2">
                                            Explore more goodness with SBI Indonesia: Discover 5 steps to
                                        </div>
                                        <div>
                                            your finances with us. Learn more now!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="grid grid-cols-1 gap-6">
                                <div v-for="(item, index) of listKebaikan" :key="index" class="flex justify-center">
                                    <div class="bg-white w-[70%] rounded-2xl p-8">
                                        <div class="hidden md:grid grid-cols-2">
                                            <div>
                                                <div>
                                                    <div class="text-[40px] text-sbi-primary font-medium">
                                                        {{ item.name }}
                                                    </div>
                                                </div>
                                                <div class="mb-6">
                                                    <div class="text-[26px] text-sbi-primary font-medium">
                                                        {{ item.desc }}
                                                    </div>
                                                </div>
                                                <div class="mb-6">
                                                    <div class="grid grid-cols-1 gap-y-2">
                                                        <div v-for="(item, index) of new Array(item.array)"
                                                            :key="index">
                                                            <div class="flex gap-x-1 items-center">
                                                                <div>
                                                                    <nuxt-img src="/nano/icons/check.svg" />
                                                                </div>
                                                                <div>
                                                                    <div class="text-sm text-sbi-primary font-normal">
                                                                        Lorem ipsum dolor sit
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="button"
                                                        class="bg-sbi-primary border rounded-full py-3 px-6">
                                                        <div class="text-sm text-white font-normal">
                                                            See Detail
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="flex justify-end">
                                                <nuxt-img :src="`/nano/main-${index + 1}.png`" class="rounded-2xl" />
                                            </div>
                                        </div>

                                        <div class="flex flex-col md:hidden">
                                            <div>
                                                <nuxt-img :src="`/nano/main-${index + 1}.png`" class="rounded-2xl" />
                                            </div>
                                            <div>
                                                <div>
                                                    <div class="text-[40px] text-sbi-primary font-medium mt-5">
                                                        {{ item.name }}
                                                    </div>
                                                </div>
                                                <div class="mb-6">
                                                    <div class="text-[26px] text-sbi-primary font-medium">
                                                        {{ item.desc }}
                                                    </div>
                                                </div>
                                                <div class="mb-6">
                                                    <div class="grid grid-cols-1 gap-y-2">
                                                        <div v-for="(item, index) of new Array(item.array)"
                                                            :key="index">
                                                            <div class="flex gap-x-1 items-center">
                                                                <div>
                                                                    <nuxt-img src="/nano/icons/check.svg" />
                                                                </div>
                                                                <div>
                                                                    <div class="text-sm text-sbi-primary font-normal">
                                                                        Lorem ipsum dolor sit
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="button"
                                                        class="bg-sbi-primary border rounded-full py-3 px-6 w-full">
                                                        <div class="text-sm text-white font-normal">
                                                            See Detail
                                                        </div>
                                                    </button>
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
</template>

<script>
    export default {
        data() {
            return {
                listKebaikan: [{
                        label: 'Save',
                        desc: 'Menabung kebaikan, raih tujuan finansial dan spiritual kamu.',
                        array: 2
                    },
                    {
                        label: 'Spend',
                        desc: 'Belanja bijak dan raih berbagai keuntungannya.',
                        array: 3
                    },
                    {
                        label: 'Impact',
                        desc: 'Alirkan kebaikan Anda kepada orang yang membutuhkan bantuan.',
                        array: 3
                    },
                    {
                        label: 'Invest',
                        desc: 'Lindungi dan tumbuhkan masa depan keuangan Anda melalui investasi syariah.',
                        array: 1
                    }
                ]
            }
        },
        mounted() {
            this.animationCompas();
            this.animationBadge();
            this.animationPerson();
            this.animationText();
            this.animationCombination();
        },
        methods: {
            animationCompas() {
                const gsap = this.$gsap;

                const compas = gsap.utils.toArray('#compas');

                gsap.fromTo(
                    compas, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: compas,
                            start: '20px center',
                            end: '400px center',
                            scrub: true,
                            // markers: true,
                        },
                        rotation: 180,
                        duration: 1,
                    }
                );
            },
            animationBadge() {
                const gsap = this.$gsap;

                const badge1 = gsap.utils.toArray('#badge-1');
                const badge2 = gsap.utils.toArray('#badge-2');
                const badge3 = gsap.utils.toArray('#badge-3');
                const badge4 = gsap.utils.toArray('#badge-4');

                gsap.timeline({
                        scrollTrigger: {
                            trigger: badge1,
                            start: '-100px center',
                            end: 'bottom top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(badge1, {
                        y: 300,
                        x: -10,
                    })
                    .to(badge1, {
                        x: 50,
                    });

                gsap.timeline({
                        scrollTrigger: {
                            trigger: badge2,
                            start: '-100px center',
                            end: 'bottom top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(badge2, {
                        y: 300,
                        x: -10,
                    })
                    .to(badge2, {
                        x: 20,
                    });

                gsap.timeline({
                        scrollTrigger: {
                            trigger: badge3,
                            start: '-100px center',
                            end: 'bottom top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(badge3, {
                        y: 300,
                        x: 10,
                    })
                    .to(badge3, {
                        x: -20,
                    });

                gsap.timeline({
                        scrollTrigger: {
                            trigger: badge4,
                            start: '-100px center',
                            end: 'bottom top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(badge4, {
                        y: 300,
                        x: 10,
                    })
                    .to(badge4, {
                        x: -50,
                    });
            },
            animationPerson() {
                const gsap = this.$gsap;

                const personL = gsap.utils.toArray('#person-l');
                const personR = gsap.utils.toArray('#person-r');

                gsap.timeline({
                        scrollTrigger: {
                            trigger: personL,
                            start: '-600px center',
                            end: '-400 top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(personL, {
                        xPercent: 100,
                        duration: 0.1
                    });

                gsap.timeline({
                        scrollTrigger: {
                            trigger: personR,
                            start: '-600px center',
                            end: '-400 top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(personR, {
                        xPercent: -60,
                        duration: 0.1
                    });
            },
            animationText() {
                const gsap = this.$gsap;

                const animationText = gsap.utils.toArray('#animationText');

                const texts = [
                    'Creative Youth',
                    'Young Family',
                    'Caring Businessman',
                    'Independent Entrepreneur'
                ];

                const timeline = gsap.timeline({
                    repeat: -1
                });


                const displayDuration = 2;
                const animationDuration = 0.5;

                texts.forEach((text) => {
                    timeline
                        .to(animationText, {
                            y: -50,
                            autoAlpha: 0,
                            duration: animationDuration,
                            ease: 'power1.inOut',
                        })
                        .set(animationText, {
                            textContent: text,
                            y: 50
                        })
                        .to(animationText, {
                            y: 0,
                            autoAlpha: 1,
                            duration: animationDuration,
                            ease: 'power1.inOut',
                        })
                        .to(animationText, {
                            duration: displayDuration,
                        });
                });
            },
            animationCombination() {
                const gsap = this.$gsap;

                const combL = gsap.utils.toArray('#comb-l');
                const combR = gsap.utils.toArray('#comb-r');
                const combTextL = gsap.utils.toArray('#combText-l');
                const combTextR = gsap.utils.toArray('#combText-r');

                gsap.timeline({
                        scrollTrigger: {
                            trigger: combL,
                            start: '-600px center',
                            end: '-400 top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(combL, {
                        xPercent: 107,
                        duration: 0.1
                    });

                gsap.timeline({
                        scrollTrigger: {
                            trigger: combR,
                            start: '-600px center',
                            end: '-400 top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(combR, {
                        xPercent: -92,
                        duration: 0.1
                    });

                gsap.timeline({
                        scrollTrigger: {
                            trigger: combTextL,
                            start: '-600px center',
                            end: '-400 top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(combTextL, {
                        xPercent: -160,
                        duration: 0.1
                    });

                gsap.timeline({
                        scrollTrigger: {
                            trigger: combTextR,
                            start: '-600px center',
                            end: '-400 top',
                            scrub: true,
                            // markers: true,
                        }
                    })
                    .to(combTextR, {
                        xPercent: 160,
                        duration: 0.1
                    });
            }
        }
    }

</script>

<style scoped>

</style>
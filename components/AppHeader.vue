<template>
    <div
        class="relative z-50"
        @mouseleave="onExpandMenu(true, isExpandMenu.name)"
    >
        <!-- fixed w-full -->
        <div class="bg-white hidden md:block">
            <div class="container mx-auto">
                <div class="py-6">
                    <div class="flex items-center">
                        <div class="flex-grow">
                            <ul class="flex gap-x-8 items-center">
                                <li @click="onRedirectProductServices('/')">
                                    <div>
                                        <nuxt-img
                                            src="/Logo-SBII.svg"
                                            alt="logo"
                                            class="cursor-pointer"
                                        />
                                    </div>
                                </li>
                                <li
                                    v-for="(item, index) of listHeader"
                                    :key="index"
                                    class="cursor-pointer select-none"
                                    @click="
                                        onExpandMenu(item.isExpand, item.name)
                                    "
                                >
                                    <div v-if="item.isExpand">
                                        <div class="flex gap-x-2 items-center">
                                            <div
                                                class="text-sm text-[#262b31] font-normal hover:text-[#0084C8]"
                                            >
                                                {{ item.name }}
                                            </div>
                                            <div>
                                                <nuxt-img
                                                    src="/nano/icons/arrow_down.svg"
                                                    alt="arrow_down"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div
                                            class="text-sm text-[#262b31] font-normal hover:text-[#0084C8]"
                                            @click="
                                                onRedirectProductServices(
                                                    item.link
                                                )
                                            "
                                        >
                                            {{ item.name }}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="flex gap-x-8 items-center">
                                <li
                                    class="cursor-pointer select-none"
                                    @click="onExpandMenu(true, 'About Us')"
                                >
                                    <div class="flex gap-x-2 items-center">
                                        <div
                                            class="text-sm text-[#262b31] font-normal hover:text-[#0084C8]"
                                        >
                                            About Us
                                        </div>
                                        <div>
                                            <nuxt-img
                                                src="/nano/icons/arrow_down.svg"
                                                alt="arrow_down"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li class="cursor-pointer select-none">
                                    <div
                                        class="text-sm text-[#262b31] font-normal hover:text-[#0084C8]"
                                    >
                                        Contact Us
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button
                                            type="button"
                                            class="bg-[#0084C8] rounded-full py-2 px-6"
                                        >
                                            <div
                                                class="text-sm text-white font-normal cursor-pointer"
                                            >
                                                Login
                                            </div>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="w-full bg-white flex flex-row justify-between items-center md:hidden px-5 py-4"
        >
            <div @click="onRedirectProductServices('/')">
                <nuxt-img
                    src="/Logo-SBII.svg"
                    alt="logo"
                    class="cursor-pointer"
                />
            </div>
            <div
                class="border-[1px] border-blue-500 p-1 rounded-md cursor-pointer"
                @click="onExpandMenu(true, 'Mobile')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                </svg>
            </div>
        </div>

        <!-- top-[84px] -->
        <div class="absolute w-full">
            <div class="bg-white rounded-bl-xl rounded-br-xl">
                <div class="container mx-auto">
                    <div v-if="isExpandMenu.name !== ''" class="pb-8 pt-4">
                        <div v-if="isExpandMenu.name === 'Deposit Product'">
                            <div class="grid md:grid-cols-5 md:gap-x-6 px-10 md:px-0">
                                <div
                                    v-for="(item, index) of listDepositProduct"
                                    :key="index"
                                    class="cursor-pointer"
                                    @click="
                                        onRedirectProductServices(item.link)
                                    "
                                >
                                    <!-- <div class="mb-2"> -->
                                    <div class="rounded-xl mb-5 md:mb-0">
                                        <nuxt-img
                                            :src="item.image"
                                            class="rounded-xl transition ease-in-out hover:-translate-y-2"
                                        />
                                    </div>
                                    <!-- </div> -->
                                    <!-- <div class="text-sm text-[#262b31] font-normal">
                                        {{ item.name }}
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div v-if="isExpandMenu.name === 'Products & Services'">
                            <div class="grid grid-cols-3 gap-x-6 px-10 md:px-0">
                                <div
                                    v-for="(item, index) of listProductServices"
                                    :key="index"
                                >
                                    <div class="mb-4">
                                        <div
                                            class="text-sm text-[#262b31] font-bold"
                                        >
                                            {{ item.name }}
                                        </div>
                                    </div>
                                    <div>
                                        <ul
                                            class="text-sm text-[#262b31] font-normal"
                                        >
                                            <li
                                                v-for="(sub, index) of item.sub"
                                                :key="index"
                                                @click="
                                                    onRedirectProductServices(
                                                        sub.link
                                                    )
                                                "
                                                class="cursor-pointer hover:text-[#0084C8] mb-3 last:mb-0 transition ease-in-out hover:translate-x-2"
                                            >
                                                {{ sub.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isExpandMenu.name === 'About Us'">
                            <div class="grid grid-cols-3 gap-x-6 px-10 md:px-0">
                                <div
                                    v-for="(item, index) of listAboutSBII"
                                    :key="index"
                                >
                                    <div class="mb-4">
                                        <div
                                            class="text-sm text-[#262b31] font-bold"
                                        >
                                            {{ item.name }}
                                        </div>
                                    </div>
                                    <div>
                                        <ul
                                            class="text-sm text-[#262b31] font-normal"
                                        >
                                            <li
                                                v-for="(sub, index) of item.sub"
                                                :key="index"
                                                @click="
                                                    onRedirectProductServices(
                                                        sub.link
                                                    )
                                                "
                                                class="cursor-pointer hover:text-[#0084C8] mb-3 last:mb-0 transition ease-in-out hover:translate-x-2"
                                            >
                                                {{ sub.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isExpandMenu.name === 'Mobile'">
                            <div class="flex flex-col items-center">
                                <div class="flex-grow">
                                    <ul class="flex flex-col gap-x-8 items-center">
                                        <li
                                            v-for="(item, index) of listHeader"
                                            :key="index"
                                            class="cursor-pointer select-none"
                                            @click="
                                                onExpandMenu(item.isExpand, item.name)
                                            "
                                        >
                                            <div v-if="item.isExpand">
                                                <div class="flex gap-x-2 items-center p-3 border-b-[1px] border-blue-300">
                                                    <div
                                                        class="text-sm text-[#262b31] font-normal hover:text-[#0084C8]"
                                                    >
                                                        {{ item.name }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div
                                                    class="text-sm text-[#262b31] font-normal hover:text-[#0084C8] p-3 border-b-[1px] border-blue-300"
                                                    @click="
                                                        onRedirectProductServices(
                                                            item.link
                                                        )
                                                    "
                                                >
                                                    {{ item.name }}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="flex flex-col gap-x-8 items-center">
                                        <li
                                            class="cursor-pointer select-none"
                                            @click="onExpandMenu(true, 'About Us')"
                                        >
                                            <div class="flex gap-x-2 items-center p-3 border-b-[1px] border-blue-300">
                                                <div
                                                    class="text-sm text-[#262b31] font-normal hover:text-[#0084C8]"
                                                >
                                                    About Us
                                                </div>
                                            </div>
                                        </li>
                                        <li class="cursor-pointer select-none">
                                            <div
                                                class="text-sm text-[#262b31] font-normal hover:text-[#0084C8] p-3 border-b-[1px] border-blue-300"
                                            >
                                                Contact Us
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <button
                                                    type="button"
                                                    class="bg-[#0084C8] rounded-full py-2 px-6 mt-5"
                                                >
                                                    <div
                                                        class="text-sm text-white font-normal cursor-pointer"
                                                    >
                                                        Login
                                                    </div>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
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
            isActiveMenu: null,
            listHeader: [
                {
                    name: "Deposit Product",
                    link: "",
                    isExpand: true,
                },
                {
                    name: "Products & Services",
                    link: "/products-services",
                    isExpand: false,
                },
                {
                    name: "News & Events",
                    link: "news-events",
                    isExpand: false,
                },
            ],
            listDepositProduct: [
                {
                    name: "Current Account",
                    image: "/nano/images/product/image.png",
                    link: "/products-services",
                },
                {
                    name: "Savings Account",
                    image: "/nano/images/product/image.png",
                    link: "/products-services",
                },
                {
                    name: "Time Deposit Account",
                    image: "/nano/images/product/image.png",
                    link: "/products-services",
                },
                {
                    name: "Safe Deposit Box",
                    image: "/nano/images/product/image.png",
                    link: "/products-services",
                },
                {
                    name: "Safe Deposit Box",
                    image: "/nano/images/product/image.png",
                    link: "/products-services",
                },
            ],
            listProductServices: [
                {
                    name: "Deposit Product",
                    sub: [
                        {
                            name: "Current Account",
                            link: "/products-services",
                        },
                        {
                            name: "Savings Account",
                            link: "/products-services",
                        },
                        {
                            name: "Time Deposit",
                            link: "/products-services",
                        },
                        {
                            name: "Interest Calculation Method",
                            link: "/products-services",
                        },
                    ],
                },
                {
                    name: "Loan Product",
                    sub: [
                        {
                            name: "Letter of Credit",
                            link: "/products-services",
                        },
                        {
                            name: "Term Loan",
                            link: "/products-services",
                        },
                        {
                            name: "Demand Loan",
                            link: "/products-services",
                        },
                        {
                            name: "PRK Demand",
                            link: "/products-services",
                        },
                        {
                            name: "KPR/KPA",
                            link: "/products-services",
                        },
                        {
                            name: "Domestic Letter of Credit",
                            link: "/products-services",
                        },
                        {
                            name: "Overdraft facility",
                            link: "/products-services",
                        },
                        {
                            name: "SBLC",
                            link: "/products-services",
                        },
                        {
                            name: "Export Credit",
                            link: "/products-services",
                        },
                        {
                            name: "Back to Back",
                            link: "/products-services",
                        },
                    ],
                },
                {
                    name: "Other",
                    sub: [
                        {
                            name: "Bank Reference",
                            link: "/products-services",
                        },
                        {
                            name: "Safe Deposit Box",
                            link: "/products-services",
                        },
                        {
                            name: "Bank Guarantee",
                            link: "/products-services",
                        },
                        {
                            name: "Clearing",
                            link: "/products-services",
                        },
                        {
                            name: "BI RTGS",
                            link: "/products-services",
                        },
                        {
                            name: "Transfer SKNBI",
                            link: "/products-services",
                        },
                        {
                            name: "ATM",
                            link: "/products-services",
                        },
                        {
                            name: "Phone Banking",
                            link: "/products-services",
                        },
                        {
                            name: "SMS Banking",
                            link: "/products-services",
                        },
                        {
                            name: "Internet Banking",
                            link: "/products-services",
                        },
                    ],
                },
            ],
            listAboutSBII: [
                {
                    name: "About Us",
                    sub: [
                        {
                            name: "About Us",
                            link: "/about-us",
                        },
                        {
                            name: "Management",
                            link: "",
                        },
                        {
                            name: "Organizational Structure",
                            link: "",
                        },
                        {
                            name: "Whistle Blowing System",
                            link: "",
                        },
                        {
                            name: "Branch Offices",
                            link: "/branch-offices",
                        },
                    ],
                },
                {
                    name: "Report",
                    sub: [
                        {
                            name: "Financial Statement",
                            link: "",
                        },
                        {
                            name: "Sustainability Report",
                            link: "",
                        },
                    ],
                },
                {
                    name: "Other",
                    sub: [
                        {
                            name: "Career",
                            link: "/carrer",
                        },
                        {
                            name: "Disclaimer",
                            link: "",
                        },
                        {
                            name: "E-Channel",
                            link: "",
                        },
                        {
                            name: "Download Form",
                            link: "",
                        },
                    ],
                },
            ],
            isExpandMenu: {
                name: "",
                status: false,
            },
        };
    },
    mounted() {},
    methods: {
        onExpandMenu(expand, name) {
            let el = document.getElementById("layout-blur");

            this.isExpandMenu.status = false;
            if (!expand) {
                return;
            }

            if (this.isExpandMenu.name === name) {
                this.isExpandMenu.name = "";
                this.isExpandMenu.status = false;

                if (el) {
                    el.classList.add("hidden");
                }
                return;
            }

            this.isExpandMenu.name = name;
            this.isExpandMenu.status = true;

            if (el) {
                el.classList.remove("hidden");
            }
        },
        onRedirectProductServices(link) {
            let el = document.getElementById("layout-blur");

            this.$router.push({
                path: link,
            });

            this.isExpandMenu.name = "";
            this.isExpandMenu.status = false;

            if (el) {
                el.classList.add("hidden");
            }
        },
    },
};
</script>

<style scoped>
li.active div {
    color: #0052b4;
    font-weight: 600;
}
</style>

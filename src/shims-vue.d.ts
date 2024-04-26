declare module '*.vue' {
    import Vue from 'vue'

    import AboutView from '@/views/AboutView.vue'
    import AuthCallbackView from '@/views/AuthCallbackView.vue'
    import DashboardView from '@/views/DashboardView.vue'
    import HomeView from '@/views/HomeView.vue'
    import LoginView from '@/views/LoginView.vue'
    import PyLView from '@/views/PyLView.vue'

    import AppFooter from '@/components/AppFooter.vue'
    import AppHeader from '@/components/AppHeader.vue'

    import PyLBattlefield from '@/components/pyl-tcg/PyLBattlefield.vue'
    import PyLDeck from '@/components/pyl-tcg/PyLDeck.vue'
    import PyLDiscard from '@/components/pyl-tcg/PyLDiscard.vue'
    import PyLHand from '@/components/pyl-tcg/PyLHand.vue'

    import AboutPage from '@/components/AboutPage.vue'
    import DashboardPage from '@/components/DashboardPage.vue'
    import HomePage from '@/components/HomePage.vue'

    export { AboutPage, DashboardPage, HomePage }
    export { PyLBattlefield, PyLDeck, PyLDiscard, PyLHand }
    export { AppFooter, AppHeader }
    export { AboutView, AuthCallbackView, DashboardView, HomeView, LoginView, PyLView }
    export default Vue
}
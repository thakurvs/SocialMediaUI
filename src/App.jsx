import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotificationsPage from "./pages/NotificationsPage"
import ShopPage from "./pages/ShopPage"
import ConversationPage from "./pages/ConversationPage"
import WalletPage from "./pages/WalletPage"
import SubscriptionPage from "./pages/SubscriptionPage"
import ProfilePage from "./pages/ProfilePage"
import SettingsPage from "./pages/SettingsPage"
import "./index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/conversation" element={<ConversationPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  )
}

export default App




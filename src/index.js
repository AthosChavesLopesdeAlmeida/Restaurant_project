import './style.css'
const homeBtn = document.getElementById('homeBtn')
const aboutBtn = document.getElementById('aboutBtn')
const menuBtn = document.getElementById('menuBtn')
const content = document.getElementById('content')

import { homePageLoad } from './pages/home.js'
import { menuPageLoad } from './pages/menu.js'
import { aboutPageLoad } from './pages/about.js'


homeBtn.addEventListener('click', homePageLoad)
menuBtn.addEventListener('click', menuPageLoad)
aboutBtn.addEventListener('click', aboutPageLoad)
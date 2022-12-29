import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

//import LocomotiveScroll from 'locomotive-scroll';
//import '../styles/locomotive-scroll.css';
//const scroll = new LocomotiveScroll();

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind()],
	site: 'https://uday.codes',
//	base: '/my-repo', --  dont use if using a custom domain 
});  
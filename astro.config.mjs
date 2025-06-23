// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DONOR LIB',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				
				{
					label: 'Best',
					autogenerate: {
						 directory: 'best',
						 },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '导航', slug: 'guides/example' },
						{ label: 'FAQ', slug: 'guides/faq'}
					],
				},
				{
					label: 'Smoothbaby',
					autogenerate: {
						 directory: 'smoothbaby',
						 },
				},
				{
					label: 'Tang-ivf',
					autogenerate: {
						 directory: 'TANG-ivf',
						 },
				},


				
				{
					label: 'Sperm',
					autogenerate: {
						 directory: 'sperm',
						 },
				},

			],
		}),
	],
});

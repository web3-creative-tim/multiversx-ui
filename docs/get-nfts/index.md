---
title: Get NFTs Example
layout: docs
description: View Get NFTs example
---
{% include edit-on-github.md %}


## Get NFT Example

In this tutorial, we will learn how to create an NFT page with real data using components from Elrond Design System and Elrond API.

#### Requirements

<div class="d-flex mb-4">
	<badge class="border boder-dark border-radius-xl d-flex align-items-center me-2 p-1">
	  <span class="badge badge-sm badge-circle bg-gradient-dark">
			<img src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg" class="p-1">
		</span>
	  <span class="text-dark text-xs font-weight-bold me-1 ms-1">React</span>
	</badge>
	<badge class="border boder-dark border-radius-xl d-flex align-items-center me-2 p-1">
		<span class="badge badge-circle">
			<svg class="w-90" viewBox=".5 -.2 1023 1024.1" width="1024pt" xmlns="http://www.w3.org/2000/svg"><path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"/><path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"/></svg>
		</span>
	  <span class="text-dark text-xs font-weight-bold me-1 ms-1">Next.js</span>
	</badge>
	<badge class="border boder-dark border-radius-xl d-flex align-items-center me-2 p-1">
	  <span class="badge badge-sm badge-circle bg-white">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 204 203" version="1.1" class="w-70">
				<!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
				<title>Combined Shape@1x</title>
				<desc>Created with Sketch.</desc>
				<g id="Identity" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Logo_draft" transform="translate(-1122.000000, -2394.000000)" fill="#140442">
								<g id="Group-3" transform="translate(595.257512, 2394.000000)">
										<g id="Group-4" transform="translate(0.242488, 0.000000)">
												<g id="Group" transform="translate(527.000000, 0.000000)">
														<path d="M162.875096,40.2968825 C162.159431,39.5488162 161.786283,38.5713243 161.786283,37.6327652 C161.786283,36.6580542 162.159431,35.7194952 162.875096,34.9686479 C164.339842,33.5072767 166.706826,33.5072767 168.174356,34.9686479 C168.923437,35.7194952 169.300762,36.6580542 169.300762,37.6327652 C169.300762,38.5713243 168.923437,39.5488162 168.174356,40.2968825 C167.458692,41.0115778 166.482659,41.385611 165.542827,41.385611 C164.566794,41.385611 163.587976,41.0115778 162.875096,40.2968825 Z M152.240375,50.9171997 C151.526102,50.1663525 151.151562,49.190251 151.151562,48.2530824 C151.151562,47.2783715 151.526102,46.3398124 152.240375,45.5889651 C153.70512,44.1262035 156.112483,44.1262035 157.575836,45.5889651 C158.2915,46.3398124 158.666041,47.2783715 158.666041,48.2530824 C158.666041,49.190251 158.2915,50.1663525 157.575836,50.9171997 C156.82397,51.631895 155.884138,52.0045378 154.908105,52.0045378 C153.932072,52.0045378 152.99224,51.631895 152.240375,50.9171997 Z M141.607046,61.4999745 C140.891381,60.7852792 140.51684,59.8105682 140.51684,58.8720092 C140.51684,57.8986887 140.891381,56.9225872 141.607046,56.2078919 C143.070399,54.7465207 145.477761,54.7465207 146.942507,56.2078919 C147.656779,56.9225872 148.032712,57.8986887 148.032712,58.8720092 C148.032712,59.8105682 147.656779,60.7852792 146.942507,61.4999745 C146.190641,62.2508218 145.250809,62.624855 144.274776,62.624855 C143.297351,62.624855 142.358911,62.2508218 141.607046,61.4999745 Z M130.972324,72.1202918 C130.260836,71.4055964 129.883511,70.4308854 129.883511,69.4561745 C129.883511,68.5176154 130.260836,67.5429044 130.972324,66.8282091 C132.43707,65.3668379 134.84304,65.3668379 136.307785,66.8282091 C137.02345,67.5429044 137.39799,68.5176154 137.39799,69.4561745 C137.39799,70.4308854 137.02345,71.4055964 136.307785,72.1202918 C135.55592,72.871139 134.616088,73.2076298 133.640055,73.2076298 C132.700223,73.2076298 131.72419,72.871139 130.972324,72.1202918 Z M120.375196,82.7392185 C119.626115,82.0259136 119.24879,81.0498122 119.24879,80.0751012 C119.24879,79.1365422 119.626115,78.1590503 120.375196,77.4485263 C121.806525,75.9454414 124.208318,75.9454414 125.673064,77.4485263 C126.424929,78.1590503 126.763269,79.1365422 126.763269,80.0751012 C126.763269,81.0498122 126.424929,82.0259136 125.673064,82.7392185 C124.961576,83.4914562 123.981366,83.827947 123.005333,83.827947 C122.065501,83.827947 121.089468,83.4914562 120.375196,82.7392185 Z M108.614068,90.6954184 C108.614068,89.7568594 108.992786,88.7793675 109.740475,88.0313012 C111.209397,86.5657586 113.574989,86.5657586 115.038342,88.0313012 C115.7916,88.7793675 116.12994,89.7568594 116.12994,90.6954184 C116.12994,91.6701294 115.7916,92.6086885 115.038342,93.3595357 C114.328247,94.0700597 113.352214,94.4482642 112.370612,94.4482642 C111.432172,94.4482642 110.456139,94.0700597 109.740475,93.3595357 C108.992786,92.6086885 108.614068,91.6701294 108.614068,90.6954184 Z M88.4752087,114.558456 C87.7609363,113.847932 87.3850035,112.86905 87.3850035,111.930491 C87.3850035,110.95578 87.7609363,110.018611 88.4752087,109.266374 C89.9399543,107.806393 92.3431396,107.806393 93.7702919,109.266374 C94.5235498,110.018611 94.900875,110.95578 94.900875,111.930491 C94.900875,112.86905 94.5235498,113.847932 93.7702919,114.558456 C93.0588042,115.310694 92.0827713,115.684727 91.1429393,115.684727 C90.1627293,115.684727 89.2242896,115.310694 88.4752087,114.558456 Z M77.8418796,125.178774 C77.1262149,124.46825 76.7502821,123.489367 76.7502821,122.550808 C76.7502821,121.576097 77.1262149,120.638929 77.8418796,119.886691 C79.3052328,118.42532 81.7084181,118.42532 83.1773408,119.886691 C83.8888284,120.638929 84.2675459,121.576097 84.2675459,122.550808 C84.2675459,123.489367 83.8888284,124.46825 83.1773408,125.178774 C82.4254751,125.931011 81.4494422,126.303654 80.5096102,126.303654 C79.5335772,126.303654 78.5937452,125.931011 77.8418796,125.178774 Z M67.2071581,135.7977 C66.4914935,135.088567 66.1183453,134.109684 66.1183453,133.171125 C66.1183453,132.196414 66.4914935,131.221703 67.2071581,130.507008 C68.6719037,129.044246 71.0778737,129.044246 72.5426193,130.507008 C73.2554993,131.221703 73.6328245,132.196414 73.6328245,133.171125 C73.6328245,134.109684 73.2554993,135.088567 72.5426193,135.7977 C71.7907537,136.551329 70.8509217,136.887819 69.8748887,136.887819 C68.8988558,136.887819 67.9590238,136.551329 67.2071581,135.7977 Z M56.61003,146.418018 C55.8581644,145.704713 55.4836239,144.728611 55.4836239,143.7539 C55.4836239,142.815341 55.8581644,141.842021 56.61003,141.089783 C58.0733832,139.664564 60.4445446,139.664564 61.9078979,141.089783 C62.6235626,141.842021 62.9994954,142.815341 62.9994954,143.7539 C62.9994954,144.728611 62.6235626,145.704713 61.9078979,146.418018 C61.1560323,147.168865 60.2162003,147.506746 59.2401673,147.506746 C58.3017276,147.506746 57.3243023,147.168865 56.61003,146.418018 Z M45.9753086,157.038335 C45.2234429,156.323639 44.8489025,155.348928 44.8489025,154.374217 C44.8489025,153.435658 45.2234429,152.460947 45.9753086,151.7101 C47.4442312,150.28349 49.8098232,150.28349 51.2745688,151.7101 C52.0264344,152.460947 52.3647739,153.435658 52.3647739,154.374217 C52.3647739,155.348928 52.0264344,156.323639 51.2745688,157.038335 C50.5589041,157.75303 49.5828712,158.127063 48.6068382,158.127063 C47.6670062,158.127063 46.6909732,157.75303 45.9753086,157.038335 Z M35.3405871,167.658652 C34.5887215,166.907805 34.2517743,165.969246 34.2517743,164.994535 C34.2517743,164.018433 34.5887215,163.081265 35.3405871,162.330417 C36.8095098,160.864875 39.1751018,160.864875 40.6398474,162.330417 C41.391713,163.081265 41.7676458,164.018433 41.7676458,164.994535 C41.7676458,165.969246 41.391713,166.907805 40.6398474,167.658652 C39.9283597,168.369176 38.9481497,168.74738 38.0083177,168.74738 C37.0322848,168.74738 36.0562518,168.369176 35.3405871,167.658652 Z M40.6774406,40.2968825 C39.9645607,41.0115778 38.985743,41.385611 38.0097101,41.385611 C37.069878,41.385611 36.0938451,41.0115778 35.3781804,40.2968825 C34.6290995,39.5488162 34.2517743,38.5713243 34.2517743,37.6327652 C34.2517743,36.6580542 34.6290995,35.7194952 35.3781804,34.9686479 C36.8457107,33.5072767 39.212695,33.5072767 40.6774406,34.9686479 C41.3931053,35.7194952 41.7662534,36.6580542 41.7662534,37.6327652 C41.7662534,38.5713243 41.3931053,39.5488162 40.6774406,40.2968825 Z M51.3121621,50.9171997 C50.5602965,51.631895 49.6204644,52.0045378 48.6444315,52.0045378 C47.6683985,52.0045378 46.7285665,51.631895 45.9767009,50.9171997 C45.2610362,50.1663525 44.8864958,49.190251 44.8864958,48.2530824 C44.8864958,47.2783715 45.2610362,46.3398124 45.9767009,45.5889651 C47.4400542,44.1262035 49.8474165,44.1262035 51.3121621,45.5889651 C52.0264344,46.3398124 52.4009749,47.2783715 52.4009749,48.2530824 C52.4009749,49.190251 52.0264344,50.1663525 51.3121621,50.9171997 Z M61.9454912,61.4999745 C61.1936256,62.2508218 60.2551859,62.624855 59.2777606,62.624855 C58.3017276,62.624855 57.3618956,62.2508218 56.61003,61.4999745 C55.8957576,60.7852792 55.5198248,59.8105682 55.5198248,58.8720092 C55.5198248,57.8986887 55.8957576,56.9225872 56.61003,56.2078919 C58.0747756,54.7465207 60.4821379,54.7465207 61.9454912,56.2078919 C62.6611558,56.9225872 63.0356963,57.8986887 63.0356963,58.8720092 C63.0356963,59.8105682 62.6611558,60.7852792 61.9454912,61.4999745 Z M72.5802126,72.1202918 C71.828347,72.871139 70.852314,73.2076298 69.912482,73.2076298 C68.9364491,73.2076298 67.996617,72.871139 67.2447514,72.1202918 C66.5290867,71.4055964 66.1545463,70.4308854 66.1545463,69.4561745 C66.1545463,68.5176154 66.5290867,67.5429044 67.2447514,66.8282091 C68.709497,65.3668379 71.115467,65.3668379 72.5802126,66.8282091 C73.2917003,67.5429044 73.6690254,68.5176154 73.6690254,69.4561745 C73.6690254,70.4308854 73.2917003,71.4055964 72.5802126,72.1202918 Z M83.1773408,82.7392185 C82.4630684,83.4914562 81.4870355,83.827947 80.5472034,83.827947 C79.5711705,83.827947 78.5909605,83.4914562 77.8794729,82.7392185 C77.1276072,82.0259136 76.7892677,81.0498122 76.7892677,80.0751012 C76.7892677,79.1365422 77.1276072,78.1590503 77.8794729,77.4485263 C79.3442185,75.9454414 81.7460114,75.9454414 83.1773408,77.4485263 C83.9264217,78.1590503 84.3037468,79.1365422 84.3037468,80.0751012 C84.3037468,81.0498122 83.9264217,82.0259136 83.1773408,82.7392185 Z M94.9384683,90.6954184 C94.9384683,91.6701294 94.5597508,92.6086885 93.8120622,93.3595357 C93.0963975,94.0700597 92.1203646,94.4482642 91.1819249,94.4482642 C90.2003225,94.4482642 89.2242896,94.0700597 88.5141943,93.3595357 C87.7609363,92.6086885 87.4225968,91.6701294 87.4225968,90.6954184 C87.4225968,89.7568594 87.7609363,88.7793675 88.5141943,88.0313012 C89.9775476,86.5657586 92.3431396,86.5657586 93.8120622,88.0313012 C94.5597508,88.7793675 94.9384683,89.7568594 94.9384683,90.6954184 Z M115.077328,114.558456 C114.328247,115.310694 113.389807,115.684727 112.409597,115.684727 C111.469765,115.684727 110.493732,115.310694 109.782245,114.558456 C109.028987,113.847932 108.651662,112.86905 108.651662,111.930491 C108.651662,110.95578 109.028987,110.018611 109.782245,109.266374 C111.209397,107.806393 113.612582,107.806393 115.077328,109.266374 C115.7916,110.018611 116.167533,110.95578 116.167533,111.930491 C116.167533,112.86905 115.7916,113.847932 115.077328,114.558456 Z M125.710657,125.178774 C124.958792,125.931011 124.018959,126.303654 123.042927,126.303654 C122.103095,126.303654 121.127062,125.931011 120.375196,125.178774 C119.663708,124.46825 119.284991,123.489367 119.284991,122.550808 C119.284991,121.576097 119.663708,120.638929 120.375196,119.886691 C121.844119,118.42532 124.247304,118.42532 125.710657,119.886691 C126.426322,120.638929 126.802255,121.576097 126.802255,122.550808 C126.802255,123.489367 126.426322,124.46825 125.710657,125.178774 Z M136.345379,135.7977 C135.593513,136.551329 134.653681,136.887819 133.677648,136.887819 C132.701615,136.887819 131.761783,136.551329 131.009917,135.7977 C130.297037,135.088567 129.919712,134.109684 129.919712,133.171125 C129.919712,132.196414 130.297037,131.221703 131.009917,130.507008 C132.474663,129.044246 134.880633,129.044246 136.345379,130.507008 C137.061043,131.221703 137.434191,132.196414 137.434191,133.171125 C137.434191,134.109684 137.061043,135.088567 136.345379,135.7977 Z M146.942507,146.418018 C146.228234,147.168865 145.250809,147.506746 144.312369,147.506746 C143.336336,147.506746 142.396504,147.168865 141.644639,146.418018 C140.928974,145.704713 140.553041,144.728611 140.553041,143.7539 C140.553041,142.815341 140.928974,141.842021 141.644639,141.089783 C143.107992,139.664564 145.479153,139.664564 146.942507,141.089783 C147.694372,141.842021 148.068913,142.815341 148.068913,143.7539 C148.068913,144.728611 147.694372,145.704713 146.942507,146.418018 Z M157.577228,157.038335 C156.861563,157.75303 155.885531,158.127063 154.945698,158.127063 C153.969666,158.127063 152.993633,157.75303 152.277968,157.038335 C151.526102,156.323639 151.187763,155.348928 151.187763,154.374217 C151.187763,153.435658 151.526102,152.460947 152.277968,151.7101 C153.742714,150.28349 156.108306,150.28349 157.577228,151.7101 C158.329094,152.460947 158.703634,153.435658 158.703634,154.374217 C158.703634,155.348928 158.329094,156.323639 157.577228,157.038335 Z M168.21195,167.658652 C167.496285,168.369176 166.520252,168.74738 165.544219,168.74738 C164.604387,168.74738 163.624177,168.369176 162.912689,167.658652 C162.160824,166.907805 161.784891,165.969246 161.784891,164.994535 C161.784891,164.018433 162.160824,163.081265 162.912689,162.330417 C164.377435,160.864875 166.743027,160.864875 168.21195,162.330417 C168.963815,163.081265 169.300762,164.018433 169.300762,164.994535 C169.300762,165.969246 168.963815,166.907805 168.21195,167.658652 Z M99.1099301,103.979853 C98.3580645,103.229006 98.019725,102.290447 98.019725,101.315736 C98.019725,100.336853 98.3580645,99.3982942 99.1099301,98.6516184 C100.574676,97.1846853 102.940268,97.1846853 104.405013,98.6516184 C105.156879,99.3982942 105.495218,100.336853 105.495218,101.315736 C105.495218,102.290447 105.156879,103.229006 104.405013,103.979853 C103.693526,104.690377 102.717493,105.068581 101.777661,105.068581 C100.797451,105.068581 99.8214177,104.690377 99.1099301,103.979853 Z M65.9546155,43.1698509 L43.1326139,20.3787605 C60.7680288,6.81784955 80.2564032,0.0221151256 101.599437,4.55408989e-05 C122.831974,-0.0203263834 142.332248,6.7940823 160.10536,20.4178067 L137.245959,43.2445479 C126.330497,36.1602112 114.442657,32.6137987 101.580738,32.6409613 C88.5488222,32.6681239 76.6779814,36.1907691 65.9546155,43.1698509 Z M43.4583268,136.905828 L20.6550247,159.678244 C7.18451883,142.044646 0.445865971,122.579272 0.466265526,101.27024 C0.488365043,79.7659757 7.19641857,60.300602 20.5887261,42.8741184 L43.3835284,65.6380462 C36.2368844,76.4436544 32.6312632,88.311998 32.6057637,101.256658 C32.5819643,114.03325 36.211385,125.91178 43.4583268,136.905828 Z M137.431085,159.559068 L160.161288,182.258485 C142.740069,195.661514 123.336693,202.44876 101.95116,202.616828 C80.3497312,202.788292 60.7253597,196.007836 43.0712452,182.300927 L65.7708495,159.632068 C76.7033108,167.055937 88.7169485,170.738162 101.818562,170.649884 C114.714481,170.561605 126.580222,166.852217 137.431085,159.559068 Z M159.904084,65.6265021 L182.739685,42.8218305 C196.465186,60.4520333 203.254837,80.0498245 203.083141,101.621995 C202.914845,122.895377 196.104794,142.260588 182.669987,159.726118 L159.859885,136.946912 C166.897731,126.26693 170.508453,114.588725 170.659749,101.902109 C170.816146,88.7520315 167.220724,76.6612944 159.904084,65.6265021 Z M183.779163,166.905015 C192.539071,166.905015 199.639816,173.99784 199.639816,182.744186 C199.639816,191.490532 192.539071,198.583357 183.779163,198.583357 C175.020954,198.583357 167.920209,191.490532 167.920209,182.744186 C167.920209,173.99784 175.020954,166.905015 183.779163,166.905015 Z M19.7733739,166.906712 C28.5315827,166.906712 35.6340276,173.99784 35.6340276,182.744186 C35.6340276,191.49223 28.5315827,198.583357 19.7733739,198.583357 C11.0134652,198.583357 3.91272027,191.49223 3.91272027,182.744186 C3.91272027,173.99784 11.0134652,166.906712 19.7733739,166.906712 Z M183.779163,3.24087917 C192.537372,3.24087917 199.639816,10.3320065 199.639816,19.0800503 C199.639816,27.8280942 192.537372,34.9192215 183.779163,34.9192215 C175.020954,34.9192215 167.918509,27.8280942 167.918509,19.0800503 C167.918509,10.3320065 175.020954,3.24087917 183.779163,3.24087917 Z M19.7733739,3.24087917 C28.5332827,3.24087917 35.6340276,10.3320065 35.6340276,19.0800503 C35.6340276,27.8263965 28.5332827,34.9192215 19.7733739,34.9192215 C11.0134652,34.9192215 3.91272027,27.8263965 3.91272027,19.0800503 C3.91272027,10.3320065 11.0134652,3.24087917 19.7733739,3.24087917 Z" id="Combined-Shape"/>
												</g>
										</g>
								</g>
						</g>
				</g>
			</svg>
		</span>
	  <span class="text-dark text-xs font-weight-bold me-1 ms-1">Elrond API</span>
	</badge>
</div>

### Create a New Next.js Project

See how to create a new project in the official Next.js documentation here: <a href="https://nextjs.org/docs" target="_blank">Next.js</a>.

### Add Dependencies

We recommend the following dependencies to be added to your <b>package.json</b> file:

<div class="position-relative">
{% highlight javascript %}

{
  "name": "Your project",
  "version": "1.0.0",
  "author": "Author",
  "license": "License",
  "homepage": "your_homepage",
  "repository": {
    "type": "git",
    "url": "your_url"
  },
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "lint": "next lint",
    "format": "prettier --write '**/*.{js,ts,tsx,json}'"
  },
  "dependencies": {
    "next": "^12.2.0",
    "react": "17.0.2",
    "react-bootstrap": "^2.4.0",
    "react-dom": "17.0.2",
    "react-router-dom": "^6.3.0",
    "sass": "^1.53.0"
  },
  "devDependencies": {
    "@types/jsonwebtoken": "^8.5.8",
    "@types/lodash.clonedeep": "^4.5.7",
    "eslint": "8.19.0",
    "eslint-config-next": "12.2.0",
    "eslint-config-prettier": "8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-valtio": "0.4.4",
    "prettier": "2.7.1",
    "typescript": "4.7.4"
  }
}

{% endhighlight %}
</div>

### Get Collection from Elrond API

In your new component created file, you can use the below code to get NFT data:

<div class="position-relative">
{% highlight javascript %}
import React, { useState, useEffect, useMemo } from 'react';

const MyCollection = (props) => {
	const ref = React.createRef();

	const [loading, setLoading] = useState(true);
  const [elrondData, setElrondData] = useState([]);
  const [myNFTS, setMyNFTS] = useState([]);
	const [address, setAddress] = useState('');

	useEffect(() => {
    fetch(
      `https://api.elrond.com/accounts/${address}/nfts?size=10000`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setElrondData(Object.entries(data));
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [address]);
};
{% endhighlight %}
</div>

### Design NFT Card

<div class="ct-example">

<div class="row">
	<div class="col-5 mx-auto">
		<div class="card card-nft shadow-lg mb-4">
		  <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
		    <div class="hover-img border-radius-lg">
		      <img src="https://media.elrond.com/nfts/asset/bafybeigfsavl3figwpet6uy6bcllpahkmuabxioxahuxbvrdx36kqfcjt4/2360.png" class="img-fluid border-radius-lg" alt="img-0">
		    </div>
		  </div>
		  <div class="card-body py-3 d-flex justify-content-between">
				<h6 class="m-0 font-weight-bold text-capitalize no_toc">NFT Name</h6>
				<h6 class="m-0 font-weight-bold no_toc">#3</h6>
		  </div>
		</div>
	</div>
</div>

</div>

<div class="position-relative">
{% highlight html %}

<div className="card card-nft shadow-lg mb-4">
  <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
    <div className="hover-img border-radius-lg">
      <img src={`https://media.elrond.com/nfts/assets/${your_CID_collection}/{your_NFT_identifier}.png`} className="img-fluid border-radius-lg" alt="img-0" />
    </div>
  </div>
  <div className="card-body py-3 d-flex justify-content-between">
    <h6 className="m-0 font-weight-bold text-capitalize">{your_NFT_name}</h6>
    <h6 className="m-0 font-weight-bold">#{your_NFT_identifier}</h6>
  </div>
</div>

{% endhighlight %}
</div>

### Add Modal to the NFT Card

In order to see the attributes of the NFT we will need to add a modal to the card.

<div class="ct-example">

<div class="row">
	<div class="col-5 mx-auto">
		<div class="card card-nft shadow-lg mb-4">
		  <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
		    <div class="hover-img border-radius-lg">
		      <img src="https://media.elrond.com/nfts/asset/bafybeigfsavl3figwpet6uy6bcllpahkmuabxioxahuxbvrdx36kqfcjt4/2360.png" class="img-fluid border-radius-lg" alt="img-0">
		      <button class="btn btn-round btn-hover-nft btn-dark position-absolute mx-6 mx-sm-4 px-2 text-uppercase font-weight-bold" data-bs-toggle="modal" data-bs-target="#attributesModal">view attributes</button>
		    </div>
		  </div>
		  <div class="card-body py-3 d-flex justify-content-between">
		    <h6 class="m-0 font-weight-bold text-capitalize no_toc">NFT Name</h6>
		    <h6 class="m-0 font-weight-bold no_toc">#3</h6>
		  </div>
		</div>
	</div>
</div>

<div class="modal fade" id="attributesModal" tabindex="-1" aria-labelledby="attributesModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg mt-10">
    <div class="modal-content">
      <div class="modal-body">
				<div class="row">
					<div class="col-sm-5 col-md-6 col-lg-4 mx-sm-auto d-flex align-items-center">
						<img src="https://devnet-media.elrond.com/nfts/asset/bafybeibzmmggzyvvedoryo4qwlxg7tup6ruk22aktqtyyx3cyq7xkrsmmq/4.png" class="img-fluid border-radius-lg shadow d-none d-sm-block" alt="">
					</div>
					<div class="col-md-12 col-lg-8 mt-4 mt-lg-0">
						<div class="row">
							<div class="col-md-12 text-start">
								<h5 class="text-capitalize mb-3 text-center font-weight-bold text-lg-start no_toc">
									<span>meta-bot &nbsp; #3</span>
								</h5>
							</div>
							<div class="col-md-6 col-sm-6">
								<p class="text-center text-sm-start text-dark text-sm font-weight-normal mb-2">Attributes</p>
							</div>
							<div class="col-md-6 col-sm-6">
								<p class="text-center text-sm-end text-dark text-sm font-weight-normal mb-4 mb-lg-2">Rarity Score: <span class="font-weight-bolder">100.000</span>
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="card card-body py-2 shadow-none border text-start mb-2">
									<h6 class="text-xs text-muted font-weight-normal mb-1 no_toc">bot_background</h6>
									<h6 class="text-sm m-0 no_toc">bot_bg_vue</h6>
								</div>
								<div class="card card-body py-2 shadow-none border text-start mb-2">
									<h6 class="text-xs text-muted font-weight-normal mb-1 no_toc">bot_body</h6>
									<h6 class="text-sm m-0 no_toc">bot_body_blue</h6>
								</div>
								<div class="card card-body py-2 shadow-none border text-start mb-2 mb-lg-0">
									<h6 class="text-xs text-muted font-weight-normal mb-1 no_toc">bot_head</h6>
									<h6 class="text-sm m-0 no_toc">bot_head_rounded_yellow</h6>
								</div>
							</div>
							<div class="col-md-6">
								<div class="card card-body py-2 shadow-none border text-start mb-2">
									<h6 class="text-xs text-muted font-weight-normal mb-1 no_toc">bot_antena_top</h6>
									<h6 class="text-sm m-0 no_toc">bot_antena_pin</h6>
								</div>
								<div class="card card-body py-2 shadow-none border text-start mb-2">
									<h6 class="text-xs text-muted font-weight-normal mb-1 no_toc">bot_antena_side</h6>
									<h6 class="text-sm m-0 no_toc">bot_antena_points_blue</h6>
								</div>
								<div class="card card-body py-2 shadow-none border text-start">
									<h6 class="text-xs text-muted font-weight-normal mb-1 no_toc">bot_eyes</h6>
									<h6 class="text-sm m-0 no_toc">bot_eyes_round_inside</h6>
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

<div class="position-relative">
{% highlight html %}

<!-- Card -->
<div className="card card-nft shadow-lg mb-4">
  <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
    <div className="hover-img border-radius-lg">
      <img src={`https://media.elrond.com/nfts/assets/${your_CID_collection}/{your_NFT_identifier}.png`} className="img-fluid border-radius-lg" alt="img-0" />
			<button
				className="btn btn-round btn-hover-nft btn-dark position-absolute mx-6 mx-sm-4 px-2 opacity-0"
				onClick={() => {
					setModalData([data]);
					setModalImage(data?.image);
					setModalIsOpen(true);
				}}
			>
				view attributes
			</button>
    </div>
  </div>
  <div className="card-body py-3 d-flex justify-content-between">
    <h6 className="m-0 font-weight-bold text-capitalize">{your_NFT_name}</h6>
    <h6 className="m-0 font-weight-bold">#{your_NFT_identifier}</h6>
  </div>
</div>

<!-- Modal -->
<Modal
	show={modalIsOpen}
	onHide={handleClose}
	size="lg"
	className="d-flex align-items-center"
>
	<Modal.Body className="p-0">
		<button
			type="button"
			className="btn btn-white text-dark shadow-none my-1 top-0 position-absolute z-index-1"
			style={{ right: '0' }}
			onClick={handleClose}
			aria-label="Close"
		>
			<i className="fas fa-times"></i>
		</button>
		<div className="card text-center shadow-none">
			<div className="card-body">
				<div className="row">
					<div className="col-sm-5 col-md-6 col-lg-4 mx-sm-auto d-flex align-items-center">
						<img
							src={modalImage}
							className="img-fluid border-radius-lg shadow d-none d-sm-block"
							alt=""
						/>
					</div>
					<div className="col-md-12 col-lg-8 mt-4 mt-lg-0">
						<div className="row">
							<div className="col-md-12 text-start">
								<h5 className="text-capitalize mb-3 text-center text-lg-start">
									{modalData.map((data, i) => {
										return (
											<span key={i}>
												{data?.attributes[6][1]?.value} &nbsp; #
												{data.nonce}
											</span>
										);
									})}
								</h5>
							</div>

							<div className="col-md-6 col-sm-6">
								<p className="text-center text-sm-start text-dark text-sm font-weight-normal mb-2">
									Attributes
								</p>
							</div>
							<div className="col-md-6 col-sm-6">
								<p className="text-center text-sm-end text-dark text-sm font-weight-normal mb-4 mb-lg-2">
									Rarity Score:{' '}
									<span className="font-weight-bolder">
										{modalData.map((data, i) =>
											data?.rarity[2][1].toFixed(3)
										)}
									</span>
								</p>
							</div>
						</div>

						{modalData.map((data, i) => (
							<div className="row" key={i}>
								<div className="col-md-6">
									<div className="card card-body py-2 shadow-none border text-start mb-2">
										<h6 className="text-xs text-muted font-weight-normal mb-1">
											{data?.attributes[0][1]?.trait_type}
										</h6>
										<h6 className="text-sm m-0">
											{data?.attributes[0][1]?.value}
										</h6>
									</div>
									<div className="card card-body py-2 shadow-none border text-start mb-2">
										<h6 className="text-xs text-muted font-weight-normal mb-1">
											{data?.attributes[1][1]?.trait_type}
										</h6>
										<h6 className="text-sm m-0">
											{data?.attributes[1][1]?.value}
										</h6>
									</div>
									<div className="card card-body py-2 shadow-none border text-start mb-2 mb-lg-0">
										<h6 className="text-xs text-muted font-weight-normal mb-1">
											{data?.attributes[2][1]?.trait_type}
										</h6>
										<h6 className="text-sm m-0">
											{data?.attributes[2][1]?.value}
										</h6>
									</div>
								</div>

								<div className="col-md-6">
									<div className="card card-body py-2 shadow-none border text-start mb-2">
										<h6 className="text-xs text-muted font-weight-normal mb-1">
											{data?.attributes[3][1]?.trait_type}
										</h6>
										<h6 className="text-sm m-0">
											{data?.attributes[3][1]?.value}
										</h6>
									</div>
									<div className="card card-body py-2 shadow-none border text-start mb-2">
										<h6 className="text-xs text-muted font-weight-normal mb-1">
											{data?.attributes[4][1]?.trait_type}
										</h6>
										<h6 className="text-sm m-0">
											{data?.attributes[4][1]?.value}
										</h6>
									</div>
									<div className="card card-body py-2 shadow-none border text-start">
										<h6 className="text-xs text-muted font-weight-normal mb-1">
											{data?.attributes[5][1]?.trait_type}
										</h6>
										<h6 className="text-sm m-0">
											{data?.attributes[5][1]?.value}
										</h6>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</Modal.Body>
</Modal>

{% endhighlight %}
</div>

<div class="position-relative">
{% highlight javascript %}

import Modal from 'react-bootstrap/Modal';
const handleClose = () => setModalIsOpen(false);
const [modalIsOpen, setModalIsOpen] = React.useState(false);
const [modalData, setModalData] = React.useState([]);
const [modalImage, setModalImage] = React.useState([]);

...

{% endhighlight %}
</div>

See a more complex example here: <a href="https://github.com/web3-creative-tim/elrond-my-nfts-collection-dapp" rel="nofollow" target="_blank">Elrond My NFTs Collection Dapp by Creative Tim </a>.

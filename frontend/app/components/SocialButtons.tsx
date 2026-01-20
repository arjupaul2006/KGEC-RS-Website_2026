type Social = {
	platform: string;
	link: string;
}

interface SocialButtonsProps {
	socials: Social[];
}

export default function SocialButtons({ socials }: SocialButtonsProps) {
	// Filter out empty links and map to button configurations
	const validSocials = socials.filter(s => s.link && s.link.trim());

	// Function to get the appropriate icon based on platform
	const getIcon = (platform: string) => {
		const lowerPlatform = platform.toLowerCase();
		
		if (lowerPlatform === 'linkedin') {
			return (
				<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.86 1 4.98 2.12 4.98 3.5ZM0 8H5V24H0V8ZM8 8H12.6V10.1H12.66C13.3 8.92 14.86 7.68 17.12 7.68C21.76 7.68 22.5 10.76 22.5 14.72V24H17.5V15.92C17.5 13.98 17.46 11.5 14.86 11.5C12.22 11.5 11.82 13.62 11.82 15.78V24H6.82V8H8Z" />
				</svg>
			);
		} else if (lowerPlatform === 'email') {
			return (
				<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
				</svg>
			);
		} else if (lowerPlatform === 'facebook') {
			return (
				<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
				</svg>
			);
		}
		return null;
	};

	// Function to get aria label for platform
	const getAriaLabel = (platform: string) => {
		const labels: { [key: string]: string } = {
			'linkedin': 'LinkedIn',
			'email': 'Email',
			'facebook': 'Facebook'
		};
		return labels[platform.toLowerCase()] || platform;
	};

	// Handle button click - redirect to link
	const handleClick = (link: string) => {
		if (link && link.trim()) {
			window.open(link, '_blank', 'noopener,noreferrer');
		}
	};

	// If no valid socials, don't render anything
	if (validSocials.length === 0) {
		return null;
	}

	return (
		<div className="flex items-center justify-center gap-3">
			{validSocials.map((social, index) => (
				<button
					key={index}
					onClick={() => handleClick(social.link)}
					className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 active:scale-90"
					aria-label={getAriaLabel(social.platform)}
					title={getAriaLabel(social.platform)}
				>
					<div className="text-slate-300 hover:text-cyan-400">
						{getIcon(social.platform)}
					</div>
				</button>
			))}
		</div>
	);
}

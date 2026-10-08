import { LaurelsBadge } from "@/components/laurels_badge/laurels_badge";
import { StarRating } from "@/components/star_rating/star_rating";
import styles from "./rating_laurels_badge.module.css";

interface RatingLaurelsBadgeProps {
	rating: number;
	caption?: string;
	showStars?: boolean;
}

export function RatingLaurelsBadge({
	rating,
	caption,
	showStars = true,
}: RatingLaurelsBadgeProps) {
	const formattedRating = rating.toFixed(1);

	return (
		<LaurelsBadge
			header={
				showStars && (
					<div className={styles.stars} aria-hidden="true">
						<StarRating rating={rating} starSize={11} />
					</div>
				)
			}
			caption={caption}
			ariaLabel={`App rating badge showing rating ${formattedRating}`}
		>
			<div className={styles.ratingValue}>{formattedRating}</div>
		</LaurelsBadge>
	);
}

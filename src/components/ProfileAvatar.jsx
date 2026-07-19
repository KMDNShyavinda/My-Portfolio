import { motion } from "framer-motion";

const DEFAULT_COLORS = [
  "#22d3ee", // cyan
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#d946ef", // fuchsia
  "#ec4899", // pink
  "#22d3ee", // back to cyan (seamless loop)
];

/**
 * ProfileAvatar — rotating conic-gradient "aura" ring around a circular photo,
 * recreated from the reference screen recording.
 *
 * Fills its parent container by default (use it inside a sized wrapper, e.g.
 * Hero.jsx's `w-64 md:w-80 lg:w-96 aspect-square` div) so it stays responsive
 * across breakpoints without needing a fixed pixel size.
 *
 * Props:
 *   imageUrl         - photo src (required)
 *   alt               - alt text
 *   size               - OPTIONAL fixed pixel size. Only pass this when using
 *                        the component standalone (not inside a sized parent),
 *                        e.g. a small avatar in the Navbar. Leave it out when
 *                        the parent already controls width/height, like in Hero.jsx.
 *   ringWidthPercent   - thickness of the gradient ring, as % of the box (default 3)
 *   gapPercent         - gap between ring and photo, as % of the box (default 2)
 *   speed              - seconds per full rotation (default 4)
 *   colors             - array of CSS colors for the conic gradient
 */
const ProfileAvatar = ({
  imageUrl,
  alt = "Profile photo",
  size,
  ringWidthPercent = 3,
  gapPercent = 2,
  speed = 4,
  colors = DEFAULT_COLORS,
  className = "",
}) => {
  const gradient = `conic-gradient(from 0deg, ${colors.join(", ")})`;
  const innerInset = `${ringWidthPercent}%`;
  const imageInset = `${ringWidthPercent + gapPercent}%`;

  return (
    <div
      className={`relative rounded-full ${size ? "" : "w-full h-full"} ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      {/* Rotating gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: gradient }}
        animate={{ rotate: 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      />

      {/* Cutout so only a thin ring shows — matches Hero section's base tones */}
      <div
        className="absolute rounded-full bg-gray-50 dark:bg-gray-900"
        style={{ inset: innerInset }}
      />

      {/* Photo */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{ inset: imageInset }}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;

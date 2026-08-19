import type { SkillDomain, SkillNode } from "../../types";
import { domainOrder, skillNodes } from "../../data/skills";

export interface PositionedNode {
  node: SkillNode;
  /** Percentage coordinates (0–100) within the constellation viewBox. */
  x: number;
  y: number;
  /** Ring radius as a percentage, used for depth/scale cues. */
  radius: number;
  /** CSS variable name for this domain's accent color. */
  colorVar: string;
  /** Animation timing so floating nodes don't move in lockstep. */
  floatDuration: number;
  floatDelay: number;
  floatAmplitude: number;
}

const DOMAIN_COLOR: Record<SkillDomain, string> = {
  languages: "var(--color-primary-light)",
  frontend: "var(--color-mint)",
  backend: "var(--color-signal)",
  databases: "var(--color-primary-light)",
  mobile: "var(--color-mint)",
  devops: "var(--color-signal)",
  methodologies: "var(--muted)",
};

const RING_START_RADIUS = 15;
const RING_STEP = 6.2;
const RING_OFFSET_DEG = 18;

export function getConstellationLayout(): PositionedNode[] {
  return domainOrder.flatMap((domain, domainIndex) => {
    const nodes = skillNodes.filter((n) => n.domain === domain);
    const radius = RING_START_RADIUS + domainIndex * RING_STEP;
    const angleOffset = domainIndex * RING_OFFSET_DEG;

    return nodes.map((node, i) => {
      const angleDeg = angleOffset + (360 / nodes.length) * i;
      const angleRad = (angleDeg * Math.PI) / 180;
      const x = 50 + radius * Math.cos(angleRad);
      const y = 50 + radius * Math.sin(angleRad);

      return {
        node,
        x,
        y,
        radius,
        colorVar: DOMAIN_COLOR[domain],
        floatDuration: 3.4 + ((domainIndex + i) % 3) * 0.6,
        floatDelay: ((domainIndex * 3 + i) % 5) * 0.35,
        floatAmplitude: 3 + ((domainIndex + i) % 3),
      };
    });
  });
}

export { DOMAIN_COLOR };

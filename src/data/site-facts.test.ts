import {
  BANANATALK_DOWNLOADS,
  BANANATALK_DOWNLOADS_DISPLAY,
  BANANATALK_USERS,
  BANANATALK_USERS_DISPLAY,
  FACTS_VERIFIED_ON,
  HACKSEOUL_PLACEMENT,
} from "./site-facts";

describe("site facts", () => {
  it("stores the user count as a number and a display string that agree", () => {
    expect(BANANATALK_USERS).toBe(1500);
    expect(BANANATALK_USERS_DISPLAY).toBe("1,500+");
    const digits = Number(BANANATALK_USERS_DISPLAY.replace(/[^0-9]/g, ""));
    expect(digits).toBe(BANANATALK_USERS);
  });

  it("stores the download count as a number and a display string that agree", () => {
    expect(BANANATALK_DOWNLOADS).toBe(3000);
    expect(BANANATALK_DOWNLOADS_DISPLAY).toBe("3,000+");
    const digits = Number(BANANATALK_DOWNLOADS_DISPLAY.replace(/[^0-9]/g, ""));
    expect(digits).toBe(BANANATALK_DOWNLOADS);
  });

  it("keeps the download figure distinct from and larger than the active-user figure", () => {
    // Downloads and active users are different claims — a recruiter who
    // checks the app stores should never find these blurred together.
    expect(BANANATALK_DOWNLOADS).not.toBe(BANANATALK_USERS);
    expect(BANANATALK_DOWNLOADS).toBeGreaterThan(BANANATALK_USERS);
  });

  it("records when the facts were last verified, so a stale claim is visible", () => {
    expect(FACTS_VERIFIED_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number.isNaN(Date.parse(FACTS_VERIFIED_ON))).toBe(false);
  });

  it("states the HackSeoul placement as second, not a win", () => {
    expect(HACKSEOUL_PLACEMENT.place).toBe(2);
    expect(HACKSEOUL_PLACEMENT.year).toBe(2025);
  });

  it("never describes the placement as a first-place win in any locale", () => {
    const { label } = HACKSEOUL_PLACEMENT;
    expect(label.en.toLowerCase()).not.toContain("winner");
    expect(label.en.toLowerCase()).not.toContain("1st");
    // 우승 means taking first place; 2등상 is the correct term for second prize.
    expect(label.ko).not.toContain("우승");
    expect(label.uz.toLowerCase()).not.toContain("g'olib");
  });

  it("carries all three locales on the placement label", () => {
    expect(Object.keys(HACKSEOUL_PLACEMENT.label).sort()).toEqual(["en", "ko", "uz"]);
  });
});

import Link from 'next/link';

export default function PlayStore({classVar}) {

  return (
    <div className={`${classVar}`}>
      <h1 style={{ fontSize: '24px' }}>
        ZeroTier works on the devices and platforms you love
      </h1>
      <p className="platform-card">
        <Link href="https://apps.apple.com/us/app/zerotier-one/id1084101492">
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/5DFGGARBM4WPQDd5sOuhx1/6d0d714935f866cd63071aac7887f970/app-store-badge.png?w=564&h=168&q=80&fm=webp"
            className="platformsIcon"
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.zerotier.one&pli=1">
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/3Q3EGmNAJ6HQvdIXxTFTj8/885824417f124ce4ebc0b7dd91f2626f/google-play-badge.png?w=564&h=168&q=80&fm=webp"
            className="platformsIcon"
          />
        </Link>
        <Link href="https://download.zerotier.com/dist/ZeroTier%20One.msi">
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/129pzqA2YvxCil1Ceh0Tje/8ddfaa594ee5ab38406e9716ca4ff202/windows-svgrepo_1.5x.png?w=61&h=60&q=80&fm=webp"
            className="platformsIconSmall"
          />
        </Link>
        <Link href="https://download.zerotier.com/dist/ZeroTier%20One.pkg">
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/6qDLhdSNnCmcF156d9d3HL/7b5e0a6552205444e19386e05f6d3835/apple-svgrepo_1.5x.png?w=61&h=60&q=80&fm=webp"
            className="platformsIconSmall"
          />
        </Link>
        <Link href="https://github.com/zerotier/ZeroTierOne">
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/tNawQ2CFAIU7y5U9ILZ5e/375bd9c3202bdc236d6a24813a226719/linux_1.5x.png?w=51&h=60&q=80&fm=webp"
            className="platformsIconSmall"
          />
        </Link>
        <Link href="https://docs.zerotier.com/devices/synology">
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/1jr22jIhs9P61xw7LGyUxl/cf1da28a2a9463f59b2eb4b2eff1785e/server-svgrepo_1.5x.png?w=61&h=60&q=80&fm=webp"
            className="platformsIconSmall"
          />
        </Link>
        <Link href="https://www.freshports.org/net/zerotier/">
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/6fEAAwtPBe96rq1rVeJcaG/10ecfc263ccd2e00cae408706ca7d624/freebsd-svgrepo_1.5x.png?w=61&h=60&q=80&fm=webp"
            className="platformsIconSmall"
          />
        </Link>
      </p>
    </div>
  );
}

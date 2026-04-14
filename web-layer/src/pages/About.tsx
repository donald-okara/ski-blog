import { TagPill } from "@/components/TagPill";

export function About() {
  return (
    <div className="mx-auto max-w-[700px] px-6 py-12 md:py-20">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        About Me
      </h1>
      
      <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-muted/20">
        {/* We use a fallback image here. To use your actual uploaded image, 
            upload it to the 'public' folder in the file explorer and name it 'profile.jpg' */}
        <img 
          src="/profile.jpg" 
          alt="Profile" 
          className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=800&auto=format&fit=crop";
          }}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none font-serif prose-p:leading-relaxed prose-p:text-fg/90">
        <p className="text-xl font-sans font-medium text-fg mb-8">
          Hi, I'm a software engineer specializing in Android, Kotlin, and Jetpack Compose. Welcome to my digital garden.
        </p>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
        </p>
        
        <h2 className="font-sans font-semibold text-2xl mt-12 mb-6 text-fg">What I do</h2>
        
        <p>
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.
        </p>

        <p>
          Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tristique, sem a dictum tristique, felis erat imperdiet sem, nec interdum diam sem ut orci.
        </p>

        <div className="mt-10 flex flex-wrap gap-2 font-sans">
          <TagPill>Android</TagPill>
          <TagPill>Kotlin</TagPill>
          <TagPill>Jetpack Compose</TagPill>
          <TagPill>System Design</TagPill>
          <TagPill>UI/UX</TagPill>
        </div>
      </div>
    </div>
  );
}

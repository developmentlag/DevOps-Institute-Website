import { Link } from "react-router-dom";
import { MENTORS, mentorInitials } from "@/data/mentors";

function MentorAvatar({ mentor }) {
  const initials = mentorInitials(mentor.name);
  return (
    <object
      data={`/mentors/${mentor.slug}.jpg`}
      type="image/jpeg"
      width="72"
      height="72"
      aria-label={`${mentor.name} portrait`}
      className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full object-cover"
    >
      <span
        className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-blue-700 text-base font-bold tracking-wide text-white"
        aria-hidden="true"
      >
        {initials}
      </span>
    </object>
  );
}

function LinkedInLink({ mentor }) {
  return (
    <a
      href={mentor.linkedin}
      target="_blank"
      rel="noopener nofollow"
      className="inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
    >
      {mentor.name} on LinkedIn
    </a>
  );
}

export function MentorCards() {
  return (
    <section className="mt-10" aria-labelledby="mentor-cards-heading">
      <h2 id="mentor-cards-heading" className="font-heading text-2xl font-bold text-slate-900">
        Mentor profiles
      </h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Employer names are plain text for the current job. They are not logos, and they do not mean the employer endorses DevOps Institute. Portrait files live at /mentors/ and the initials stand in until a photo is added.
      </p>
      <ul className="mt-6 space-y-4">
        {MENTORS.map((mentor) => (
          <li key={mentor.slug} id={mentor.slug} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-4">
              <MentorAvatar mentor={mentor} />
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">{mentor.name}</h3>
                <p className="mt-1 text-sm text-slate-700">{mentor.headline}</p>
                {mentor.experience ? <p className="mt-1 text-sm font-medium text-slate-800">{mentor.experience}</p> : null}
                <p className="mt-1 text-sm text-slate-700">Current employer: {mentor.employer}</p>
              </div>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {mentor.expertise.map((item) => (
                <li key={item} className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{mentor.detail}</p>
            <p className="mt-3">
              <LinkedInLink mentor={mentor} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function MentorTeaser() {
  return (
    <aside className="mt-4 max-w-3xl rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
      <p className="font-semibold text-slate-900">Learn from industry mentors</p>
      <p className="mt-1">
        Classes draw on mentors who work in cloud, DevOps, platform and GenAI roles. The trainers page lists each person, the current employer in plain text, and a LinkedIn profile.
      </p>
      <p className="mt-2">
        <Link to="/trainers" className="font-semibold text-blue-700 hover:text-blue-800">
          Meet the mentors
        </Link>
      </p>
    </aside>
  );
}

export function MentorPreview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" data-testid="mentors-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Faculty
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Learn from industry mentors
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            These mentors teach at the Powai campus and also work in cloud, DevOps, platform and GenAI roles. Employers are named in words only. A name here is not an endorsement, and it does not assign that person to every batch.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MENTORS.map((mentor) => (
            <li key={mentor.slug} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <MentorAvatar mentor={mentor} />
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-900">
                    <Link to={`/trainers#${mentor.slug}`} className="hover:text-blue-700">
                      {mentor.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{mentor.headline}</p>
                  <p className="mt-1 text-sm text-slate-700">Current employer: {mentor.employer}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link to="/trainers" className="inline-flex font-semibold text-blue-700 hover:text-blue-800">
            See mentor profiles
          </Link>
        </p>
      </div>
    </section>
  );
}

import { Publication } from "@/types/publication";

const SinglePublication = ({ publications, years, selectedYear, setSelectedYear, activeId, setActiveId }: { publications: Publication[], years: (number | string)[], selectedYear: number | string, setSelectedYear: Function, activeId: number | null, setActiveId: Function }) => {
  return (
    <div className="w-full publication-container">
      <div className="rounded-sm shadow-two dark:bg-transparent">
        <div className="mb-8">
          <div className="year-selector">
            {years.map(year => (
              <button key={year} onClick={() => setSelectedYear(year)} className={`year-btn ${selectedYear === year ? 'active' : ''}`}>{year}</button>
            ))}
          </div>
          <div className="publications-section">
            {publications.filter(t => t.year === selectedYear).sort((a, b) => b.id - a.id).map((t) => (
              <div key={t.id} className={`accordion-item ${activeId === t.id ? 'expanded' : 'collapsed'}`}>
                <button className="accordion-title" onClick={() => setActiveId(activeId === t.id ? null : t.id)}>
                  <div className="title-and-badge">
                    <span className="title-text">{t.name}</span>
                    <span className="badge">{t.venue}</span>
                    {t.award ? <span className="badge-award">{t.award}</span> : <></>}
                  </div>
                  <span className={`arrow ${activeId === t.id ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className="accordion-content">
                  <p>
                    <a className="publink" href={t.publink} target="_blank" rel="noopener noreferrer">
                      {t.content}
                    </a>
                    {t.flyer && (
                      <>
                        {" | "}
                        <a className="publink" href={t.flyer} target="_blank" rel="noopener noreferrer">
                          View Flyer
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePublication;
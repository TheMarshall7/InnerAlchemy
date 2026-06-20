export const FormSection = ({ title, children }) => (
  <section className="border-b border-deepbrown/10 pb-10 mb-10 last:border-0 last:pb-0 last:mb-0">
    <h2 className="text-2xl md:text-3xl font-serif text-deepbrown mb-6">{title}</h2>
    {children}
  </section>
);

export const TextField = ({ label, name, type = 'text', required, placeholder, className = '' }) => (
  <label className={`block ${className}`}>
    <span className="text-[10px] uppercase tracking-widest text-ochre font-semibold mb-2 block">{label}</span>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-deepbrown/20 py-3 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light text-sm md:text-base"
    />
  </label>
);

export const TextArea = ({ label, name, required, rows = 3, placeholder }) => (
  <label className="block">
    <span className="text-[10px] uppercase tracking-widest text-ochre font-semibold mb-2 block">{label}</span>
    <textarea
      name={name}
      required={required}
      rows={rows}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-deepbrown/20 py-3 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light resize-none text-sm md:text-base"
    />
  </label>
);

export const CheckboxGroup = ({ legend, name, options, columns = 'md:grid-cols-2' }) => (
  <fieldset className="space-y-4">
    <legend className="text-sm text-earth font-light mb-4">{legend}</legend>
    <div className={`grid grid-cols-1 ${columns} gap-3`}>
      {options.map((option) => (
        <label key={option} className="flex items-start gap-3 text-sm text-deepbrown font-light cursor-pointer group">
          <input
            type="checkbox"
            name={name}
            value={option}
            className="mt-1 accent-terracotta shrink-0"
          />
          <span className="group-hover:text-terracotta transition-colors">{option}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

export const RadioGroup = ({ legend, name, options, required }) => (
  <fieldset className="space-y-4">
    <legend className="text-sm text-earth font-light mb-4">{legend}</legend>
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 text-sm text-deepbrown font-light cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option}
            required={required}
            className="accent-terracotta"
          />
          {option}
        </label>
      ))}
    </div>
  </fieldset>
);

export const ScaleField = ({ label, name, lowLabel, highLabel }) => (
  <fieldset className="space-y-4">
    <legend className="text-sm text-earth font-light">{label}</legend>
    <div className="flex flex-wrap items-center gap-2 md:gap-3">
      <span className="text-xs text-earth/60 w-full md:w-auto mb-1 md:mb-0">{lowLabel}</span>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <label key={n} className="flex flex-col items-center gap-1 cursor-pointer">
          <input type="radio" name={name} value={n} required className="accent-terracotta" />
          <span className="text-xs text-deepbrown/60">{n}</span>
        </label>
      ))}
      <span className="text-xs text-earth/60 w-full md:w-auto">{highLabel}</span>
    </div>
  </fieldset>
);

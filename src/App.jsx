import { useState } from 'react'
import {
  GitBranch,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Terminal,
  Award,
  MapPin,
  ArrowUpRight,
  Menu,
  X,
  ArrowDown,
  Globe2,
  Sparkles,
} from 'lucide-react'
import './App.css'

const skills = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: ['C', 'C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Data Science & AI',
    icon: Database,
    items: ['NumPy', 'Pandas', 'Matplotlib', 'SciPy', 'Algorithms'],
  },
  {
    category: 'Web & UI Design',
    icon: Layout,
    items: ['ReactJS', 'Vite', 'Tailwind CSS', 'HTML5/CSS3', 'Figma'],
  },
  {
    category: 'Tools & Systems',
    icon: Terminal,
    items: ['Git & GitHub', 'Linux / Ubuntu', 'Cloudflare', 'VS Code'],
  },
]

const navigation = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Hoạt động', href: '#activities' },
  { label: 'Liên hệ', href: '#contact' },
]
const currentYear = new Date().getFullYear()

const projects = [
  {
    title: 'D-SHIFTIFY — Inclusive AI Career Platform',
    description:
      'Nền tảng công nghệ kết nối ba bên giữa người khiếm thị, doanh nghiệp và cơ sở đào tạo nhằm xóa bỏ bất đối xứng thông tin trên thị trường lao động. Tích hợp Generative AI và NLP hỗ trợ tạo hồ sơ năng lực số bằng giọng nói, áp dụng thuật toán Matching đa biến kết hợp Accessibility Score trên kiến trúc web tiếp cận chuẩn WCAG 2.2.',
    tech: ['React', 'Node.js', 'Python', 'Generative AI / NLP', 'WCAG 2.2', 'Figma'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Apple Store Landing Page',
    description:
      'Trang thương mại điện tử giới thiệu iPhone 16 Series với giao diện hiện đại, tối giản và responsive trên nhiều thiết bị.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/daiphunguyen98-rgb',
    demoSoon: true,
  },
  {
    title: 'Computer Store Management System',
    description:
      'Hệ thống quản lý cửa hàng máy tính bằng C++, áp dụng OOP, cấu trúc dữ liệu tùy chỉnh và lưu trữ dữ liệu bằng tệp.',
    tech: ['C++', 'OOP', 'Data Structures', 'Git'],
    github: 'https://github.com/daiphunguyen98-rgb',
  },
  {
    title: 'Linear Programming Solver',
    description:
      'Ứng dụng giải bài toán quy hoạch tuyến tính bằng thuật toán Đơn hình (Simplex) và Big M, cài đặt bằng ngôn ngữ C.',
    tech: ['C', 'Algorithms', 'Math Modeling'],
    github: 'https://github.com/daiphunguyen98-rgb',
  },
  {
    title: 'IoT Electrical Energy Monitor',
    description:
      'Hệ thống theo dõi điện năng tiêu thụ theo thời gian thực với cảm biến PZEM-004T, ESP8266 và nền tảng Blynk IoT.',
    tech: ['ESP8266', 'PZEM-004T', 'Blynk IoT', 'C++'],
    github: 'https://github.com/daiphunguyen98-rgb',
  },
]

const activities = [
  {
    eyebrow: 'Lãnh đạo & cộng đồng',
    title: 'Hugo English Club',
    description: 'President of Hugo Scholars & Team Leader of Heroes Company.',
    icon: Award,
  },
  {
    eyebrow: 'Chứng chỉ',
    title: 'IELTS 6.5',
    description: 'Giao tiếp và đọc hiểu tài liệu chuyên ngành bằng tiếng Anh.',
    icon: Sparkles,
  },
  {
    eyebrow: 'Đổi mới sáng tạo',
    title: 'Learning Express (LeX 9)',
    description: 'Chương trình trao đổi đổi mới sáng tạo xã hội quốc tế tại DUT.',
    icon: Globe2,
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#about" className="wordmark" onClick={closeMenu} aria-label="daiphu.dev — về đầu trang">
            daiphu<span>.dev</span>
          </a>
          <nav id="mobile-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Điều hướng chính">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Kết nối <ArrowUpRight size={15} /></a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main className="content-wrap">
        <section id="about" className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow location-badge"><MapPin size={15} /> Đà Nẵng, Việt Nam <span>•</span> Data Science & AI</div>
            <p className="hero-intro">Xin chào, mình là</p>
            <h1>Nguyễn Đại <span>Phú.</span></h1>
            <p className="hero-description">
              Sinh viên ngành <strong>Khoa học Dữ liệu & Trí tuệ Nhân tạo (Data Science & AI)</strong> tại
              Trường Đại học Bách Khoa - Đại học Đà Nẵng (DUT). Đam mê phát triển phần mềm, phân tích dữ liệu
              và xây dựng giao diện web hiện đại.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Xem dự án <ArrowDown size={16} /></a>
              <a href="https://github.com/daiphunguyen98-rgb" target="_blank" rel="noreferrer" className="button button-secondary">
                <GitBranch size={17} /> GitHub Profile <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="hero-meta"><span className="availability-dot" /> Sẵn sàng cho cơ hội học hỏi và hợp tác</div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-core"><span>&lt;</span><i>DP</i><span>/&gt;</span></div>
            <div className="floating-label label-code"><Code2 size={16} /> Software</div>
            <div className="floating-label label-data"><Database size={16} /> Data & AI</div>
            <div className="visual-caption">Curious mind. Thoughtful work.</div>
          </div>
        </section>

        <section id="skills" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Nền tảng chuyên môn</p>
            <h2>Kỹ năng <span>& công nghệ</span></h2>
            <p>Các ngôn ngữ, thư viện và công cụ mình sử dụng trong học tập và dự án.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = group.icon
              return (
                <article className="skill-card" key={group.category}>
                  <div className={`skill-icon skill-icon-${index}`}><Icon size={20} /></div>
                  <h3>{group.category}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Một vài sản phẩm tiêu biểu</p>
              <h2>Dự án <span>nổi bật</span></h2>
              <p>Từ ứng dụng thuật toán đến sản phẩm web và hệ thống IoT.</p>
            </div>
            <a className="text-link" href="https://github.com/daiphunguyen98-rgb" target="_blank" rel="noreferrer">
              Xem GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card${project.featured ? ' project-card-featured' : ''}`} key={project.title}>
                <div className="project-main">
                  <div className="project-topline"><span>0{index + 1} / PROJECT</span><ArrowUpRight size={17} /></div>
                  {project.featured && <span className="featured-badge">Featured Project</span>}
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list project-tags">
                    {project.tech.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}
                  </div>
                </div>
                <div className="project-links">
                  {project.github
                    ? <a href={project.github} target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub <ArrowUpRight size={14} /></a>
                    : <span className="project-link-placeholder"><GitBranch size={16} /> GitHub <span>Sắp cập nhật</span></span>}
                  {project.demo
                    ? <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live Demo <ArrowUpRight size={14} /></a>
                    : project.featured
                      ? <span className="project-link-placeholder"><ExternalLink size={15} /> Live Demo <span>Sắp ra mắt</span></span>
                      : project.demoSoon && <span className="demo-placeholder"><ExternalLink size={15} /> Live Demo sắp ra mắt</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="activities" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Hành trình ngoài lớp học</p>
            <h2>Hoạt động <span>& thành tích</span></h2>
          </div>
          <div className="activities-grid">
            {activities.map((activity) => {
              const Icon = activity.icon
              return (
                <article className="activity-card" key={activity.title}>
                  <div className="activity-icon"><Icon size={19} /></div>
                  <p className="activity-eyebrow">{activity.eyebrow}</p>
                  <h3>{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow" aria-hidden="true" />
          <p className="eyebrow">Có ý tưởng thú vị?</p>
          <h2>Cùng tạo nên điều <span>ý nghĩa.</span></h2>
          <p className="contact-description">
            Mình luôn sẵn sàng trao đổi về lập trình, Data Science & AI hoặc những cơ hội hợp tác mới.
          </p>
          <a className="button button-primary" href="mailto:daiphunguyen98@gmail.com"><Mail size={17} /> daiphunguyen98@gmail.com <ArrowUpRight size={15} /></a>
          <div className="contact-links">
            <a href="https://github.com/daiphunguyen98-rgb" target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a>
            <a href="https://phunguyendai.dpdns.org" target="_blank" rel="noreferrer"><Globe2 size={16} /> Website cá nhân <ArrowUpRight size={13} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#about" className="wordmark">daiphu<span>.dev</span></a>
        <p>© {currentYear} Nguyễn Đại Phú. Thiết kế và phát triển với sự tỉ mỉ.</p>
        <a className="back-to-top" href="#about">Lên đầu trang <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  )
}
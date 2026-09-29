<script setup>
import ProjectsSection from '@/components/ProjectsSection.vue'
import { experience, skillGroups, softSkills, certifications } from '@/data/profile'
</script>

<template>
  <section id="home" class="hero" aria-labelledby="hero-title">
    <img
      class="hero__branch hero__branch--right"
      src="@/assets/img/branch1right.svg"
      alt=""
      aria-hidden="true"
    />
    <img
      class="hero__branch hero__branch--left"
      src="@/assets/img/branch1left.svg"
      alt=""
      aria-hidden="true"
    />
    <div class="hero__content shell">
      <p class="eyebrow">Software developer · Costa Rica</p>
      <h1 id="hero-title">Mónica Artavia Flores</h1>
      <p class="hero__intro">
        Thoughtful interfaces.<br />Well-structured data. <em>A creative touch.</em>
      </p>
      <p class="hero__description">
        I bring web development, databases and visual design together to build useful digital
        experiences.
      </p>
      <div class="actions">
        <RouterLink class="button button--primary" to="/#projects"
          >Explore my work <span aria-hidden="true">↗</span></RouterLink
        ><RouterLink class="button button--outline" to="/#contact">Let's connect</RouterLink>
      </div>
    </div>
    <p class="hero__footnote">
      Code, curiosity & a little creativity<span aria-hidden="true">✿</span>
    </p>
  </section>

  <ProjectsSection />

  <section id="about" class="section section--tinted" aria-labelledby="about-title">
    <div class="shell about-grid">
      <div class="about-portrait">
        <img
          class="about-portrait__flower"
          src="@/assets/img/girl_flower.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>
      <div>
        <p class="eyebrow">A little about me</p>
        <h2 id="about-title">Technical thinking.<br /><em>Creative spirit.</em></h2>
        <p>
          I'm a Computer Science and Multimedia Technology graduate from the University of Costa
          Rica, with a focus on full stack web development and database management.
        </p>
        <p>
          I have hands-on experience with C#, .NET, PHP/Laravel, Vue, React, REST APIs and SQL
          databases. My work includes modernizing applications, troubleshooting, data management and
          deployment, with a focus on clean, maintainable and user-centered solutions.
        </p>
        <p>
          I'm looking for opportunities to contribute, keep learning and grow alongside a
          collaborative team.
        </p>
        <RouterLink class="text-link" to="/#contact"
          >Get in touch <span aria-hidden="true">↗</span></RouterLink
        >
      </div>
    </div>
  </section>

  <section id="skills" class="section shell" aria-labelledby="skills-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">My toolkit</p>
        <h2 id="skills-title">Skills I <em>build with.</em></h2>
      </div>
      <p>A blend of development, data and design.</p>
    </div>
    <div class="skills-grid">
      <article v-for="(group, index) in skillGroups" :key="group.title" class="skill-card">
        <span class="card-number" aria-hidden="true">0{{ index + 1 }}</span>
        <h3>{{ group.title }}</h3>
        <ul class="tags">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>
    <div class="soft-skills-panel" aria-labelledby="soft-skills-title">
      <div class="soft-skills-panel__intro">
        <p class="eyebrow">Beyond technical skills</p>
        <h3 id="soft-skills-title">How I work</h3>
        <p>The strengths I bring to every project and team.</p>
      </div>
      <ul class="soft-skills-list">
        <li v-for="skill in softSkills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </section>

  <section id="experience" class="section section--tinted" aria-labelledby="experience-title">
    <div class="shell">
      <p class="eyebrow">Putting skills into practice</p>
      <h2 id="experience-title">Work <em>experience.</em></h2>
      <div class="experience-list">
        <article v-for="job in experience" :key="job.company" class="experience-card">
          <div>
            <p class="eyebrow">{{ job.period }}</p>
            <h3>{{ job.company }}</h3>
          </div>
          <div>
            <h4>{{ job.role }}</h4>
            <ul class="detail-list">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="community" class="section shell" aria-labelledby="community-title">
    <div class="community-card">
      <div>
        <p class="eyebrow">University community service · TCU</p>
        <h2 id="community-title">Digital skills.<br /><em>Community connections.</em></h2>
        <p class="meta">September 2023 – July 2024 · University of Costa Rica</p>
        <p class="community-card__mb-btn">
          I supported community and small-business initiatives through website content organization,
          visual design and the development of an online presence across web and social platforms.
          <br/>
          The work included digital materials and online profiles aimed at improving visibility and
          accessibility for local ventures.
        </p>
        <RouterLink class="button button--primary __btn_cc" to="/project/tcu"
          >Explore the TCU project ↗</RouterLink
        >
      </div>
      <img src="@/assets/img/flowers3.svg" alt="" aria-hidden="true" loading="lazy" />
    </div>
  </section>

  <section id="education" class="section section--tinted" aria-labelledby="education-title">
    <div class="shell">
      <p class="eyebrow">Always learning</p>
      <h2 id="education-title">Education & <em>growth.</em></h2>
      <div class="education-grid">
        <article class="education-card">
          <img
            src="@/assets/img/ucr-icon.png"
            alt="University of Costa Rica"
            width="96"
            height="96"
            loading="lazy"
          />
          <p class="eyebrow">2021 – 2025</p>
          <h3>Bachelor's Degree in Computer Science and Multimedia Technology</h3>
          <p>University of Costa Rica</p>
          <p class="education-card__highlight">Academic distinction · Weighted GPA: 9.53 / 10</p>
        </article>
        <article class="education-card">
          <img
            src="@/assets/img/intensa-icon.png"
            alt="Intensa Language Institute"
            width="96"
            height="96"
            loading="lazy"
          />
          <p class="eyebrow">2025 – Present</p>
          <h3>Intensive English Program</h3>
          <p>Intensa Language Institute</p>
          <p>15 hours per week</p>
        </article>
        <article class="education-card">
          <span class="education-card__symbol" aria-hidden="true">✿</span>
          <p class="eyebrow">2026 – Present</p>
          <h3>Cybersecurity — Mujer Digital Program</h3>
          <p>Junior Achievement Costa Rica</p>
        </article>
      </div>
      <div class="languages-panel" aria-labelledby="languages-title">
        <div class="languages-heading">
          <p class="eyebrow">Communication</p>
          <h3 id="languages-title">Languages</h3>
        </div>
        <div class="languages-grid">
          <article class="language-card">
            <span class="language-card__code" aria-hidden="true">ES</span>
            <div>
              <h4>Spanish</h4>
              <p>Native</p>
            </div>
          </article>
          <article class="language-card">
            <span class="language-card__code" aria-hidden="true">EN</span>
            <div>
              <h4>English</h4>
              <p>B2 · Upper-Intermediate</p>
            </div>
          </article>
        </div>
      </div>
      <section class="education-extra" aria-labelledby="certifications-title">
        <p class="eyebrow">Continuing development</p>
        <h3 id="certifications-title">Certifications</h3>
        <div class="certifications-grid">
          <article
            v-for="certificate in certifications"
            :key="certificate.title"
            class="education-card"
          >
            <p class="eyebrow">{{ certificate.provider }} · {{ certificate.year }}</p>
            <h4>{{ certificate.title }}</h4>
            <p v-if="certificate.program" class="meta">{{ certificate.program }}</p>
            <a
              :href="certificate.url"
              class="text-link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="'View credential: ' + certificate.title"
              >View credential ↗</a
            >
          </article>
        </div>
      </section>
    </div>
  </section>

  <section id="contact" class="section shell" aria-labelledby="contact-title">
    <div class="contact-card">
      <p class="eyebrow">Let's connect</p>
      <h2 id="contact-title">Have an opportunity<br /><em>in mind?</em></h2>
      <p>I'd love to hear about your team and the work we could build together.</p>
      <a class="contact-email" href="mailto:artaviafloresmonica@gmail.com"
        >artaviafloresmonica@gmail.com <span aria-hidden="true">↗</span></a
      >
      <div class="actions">
        <a
          class="button button--outline"
          href="https://www.linkedin.com/in/monica-artavia-flores/"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn ↗</a
        ><a
          class="button button--outline"
          href="https://github.com/MoniAF"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub ↗</a
        ><a class="button button--outline" href="tel:+50685190107">(+506) 8519 0107</a>
      </div>
      <p class="meta">Costa Rica</p>
    </div>
  </section>
</template>

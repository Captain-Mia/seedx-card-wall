const projectData = [
  {
    order: 1,
    name: "Gap 圈群像纪实综艺",
    stage: "人物访谈启动期",
    stageKey: "launch",
    summary: "记录 Gap 人群的真实经历和职业故事。",
    progress: "1v1 访谈已启动，近期陆续约拍。",
    seeking: ["访谈对象"],
    direction: ["Gap 叙事", "纪实内容"],
    suitableFor: ["Gap 期伙伴", "转型探索者", "愿意分享的人"],
    tags: ["开展中"],
  },
  {
    order: 2,
    name: "电商赛道・男装项目",
    stage: "试播准备期",
    stageKey: "prep",
    summary: "围绕男装品类做直播电商。",
    progress: "供应链、直播间、主播已就位，一周内启动试播。",
    seeking: ["主播"],
    direction: ["电商", "男装", "直播带货"],
    suitableFor: ["电商运营", "服装从业者", "内容电商玩家"],
    tags: ["开展中"],
  },
  {
    order: 3,
    name: "电商赛道・AI 毛绒玩具（明星周边）",
    stage: "供应链打版期",
    stageKey: "supply",
    summary: "AI 毛绒玩具与明星周边的内容电商。",
    progress: "供应链打版中，计划 1-2 周内试播。",
    seeking: ["一号位"],
    direction: ["AI 玩具", "明星周边", "内容电商"],
    suitableFor: ["带货主播", "追星群体", "周边玩家", "内容电商玩家"],
    tags: ["开展中"],
  },
  {
    order: 4,
    name: "Gap 摆摊计划",
    stage: "首批小队组建期",
    stageKey: "team",
    summary: "用摆摊做低成本创业和线下实践。",
    progress: "首批小队已组建，已有小甜水、调酒、驻唱品类。",
    seeking: ["摆摊搭子", "新场地"],
    direction: ["摆摊实践", "低成本创业"],
    suitableFor: ["手作玩家", "摆摊新手", "Gap 期伙伴"],
    tags: ["开展中"],
  },
  {
    order: 5,
    name: "国企背书人才培训项目",
    stage: "资源合作期",
    stageKey: "coop",
    summary: "正规国企背景的人才培训招生项目。",
    progress: "合作模式已明确，正在寻找生源和渠道资源。",
    seeking: ["兼职"],
    direction: ["人才培训", "副业合作"],
    suitableFor: ["副业探索者", "渠道型伙伴"],
    tags: ["开展中"],
  },
  {
    order: 6,
    name: "SeedX 社区 AI 培训项目",
    stage: "试课准备期",
    stageKey: "trial",
    summary: "面向社区场景的 AI 培训项目。",
    progress: "已与楼友会 OPC 社区达成合作，预计 1-2 周内试课。",
    seeking: ["讲师"],
    direction: ["AI 培训", "社区课程"],
    suitableFor: ["AI 讲师", "企业培训者", "知识博主"],
    tags: ["开展中"],
  },
  {
    order: 7,
    name: "非遗产品出海项目",
    stage: "起盘筹备期",
    stageKey: "start",
    summary: "用 AI 内容和电商方式探索非遗产品出海。",
    progress: "正在梳理产品方向、内容表达和共创能力。",
    seeking: [],
    direction: ["非遗出海", "内容电商"],
    suitableFor: ["非遗爱好者", "内容电商玩家", "技术建站者"],
    tags: ["开展中"],
  },
  {
    order: 8,
    name: "音乐疗愈项目",
    stage: "团队组建期",
    stageKey: "team",
    summary: "线上音乐疗愈。",
    progress: "正在对接投资启动中。",
    seeking: ["UI 设计", "UX 设计", "内容生成"],
    direction: ["音乐疗愈", "投资内容", "内容创作"],
    suitableFor: ["UI/UX 设计师", "内容创作者", "疗愈领域从业者"],
    tags: ["招募中"],
  },
  {
    order: 9,
    name: "综合疗愈 IP 项目",
    stage: "IP 孵化期",
    stageKey: "coop",
    summary: "为 100 位不同类型的疗愈老师打造个人 IP。",
    progress: "已对接 100 多位疗愈老师。",
    seeking: ["做 IP 的伙伴"],
    direction: ["个人 IP", "疗愈课程", "知识付费"],
    suitableFor: ["内容创作者", "IP 操盘手", "疗愈爱好者"],
    tags: ["招募中"],
  },
  {
    order: 10,
    name: "公益助盲项目",
    stage: "志愿者招募期",
    stageKey: "trial",
    summary: "通过工艺活动帮助视障群体。",
    progress: "正在招募志愿者，提供小额补贴支持。",
    seeking: ["志愿者"],
    direction: ["公益", "助盲", "工艺活动"],
    suitableFor: ["志愿者", "公益人士"],
    tags: ["招募中"],
  },
];

const stageClassMap = {
  launch: "stage-launch",
  prep: "stage-prep",
  supply: "stage-supply",
  team: "stage-team",
  coop: "stage-coop",
  trial: "stage-trial",
  start: "stage-start",
};

const icons = {
  info: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36Z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>',
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function chipList(items, className) {
  return (items ?? [])
    .map((item) => `<span class="chip ${className}">${escapeHtml(item)}</span>`)
    .join("");
}

function sectionTitle(icon, title) {
  return `<h3 class="section-title">${icon}<span>${title}</span></h3>`;
}

function renderProjectCard(project) {
  const stageClass = stageClassMap[project.stageKey] || stageClassMap.start;
  const no = String(project.order).padStart(2, "0");

  return `
    <article class="project-card">
      <header class="project-header">
        <div class="project-title-row">
          <span class="project-no">No.${no}</span>
          <h2 class="project-name">${escapeHtml(project.name)}</h2>
        </div>
        <span class="stage-badge ${stageClass}">${escapeHtml(project.stage)}</span>
      </header>
      <section class="project-section">
        ${sectionTitle(icons.info, "项目简介")}
        <p class="project-box project-box-summary">${escapeHtml(project.summary)}</p>
      </section>
      <section class="project-section">
        ${sectionTitle("⚡", "项目进度")}
        <p class="project-box project-box-progress">${escapeHtml(project.progress)}</p>
      </section>
      ${project.seeking?.length ? `
        <section class="project-section">
          ${sectionTitle("🔎", "正在寻找")}
          <div class="chip-row">${chipList(project.seeking, "chip-seeking")}</div>
        </section>
      ` : ""}
      <section class="project-section">
        ${sectionTitle(icons.compass, "项目方向")}
        <div class="chip-row">${chipList(project.direction, "chip-blue")}</div>
      </section>
      <section class="project-section">
        ${sectionTitle(icons.user, "适合人群")}
        <div class="chip-row">${chipList(project.suitableFor, "chip-teal")}</div>
      </section>
    </article>
  `;
}

document.querySelector("#projectsGrid").innerHTML = projectData.map(renderProjectCard).join("");

/**
 * Student Dashboard Progress Component Updates
 */
(function (window) {
  'use strict';

  function renderStudentDashboard() {
    const container = document.getElementById('student-dashboard-app');
    if (!container || !window.SACHEE_PROGRESS) return;

    const today = window.SACHEE_PROGRESS.getTodayProgress();
    const overall = window.SACHEE_PROGRESS.getOverallProgress();
    const recent = window.SACHEE_PROGRESS.getRecentActivity(5);

    container.innerHTML = `
      <div class="dashboard-grid">
        <!-- Daily Goal Card -->
        <div class="card goal-card">
          <div class="card-header">
            <h3>Today's Goal</h3>
            <span class="badge status-${today.status.toLowerCase().replace(/\s+/g, '-')}">${today.status}</span>
          </div>
          <div class="metric-main">${today.attemptedCount} / ${today.goal}</div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${today.percentComplete}%;"></div>
          </div>
          <p class="subtitle">Questions Practiced Today</p>
        </div>

        <!-- Accuracy Card -->
        <div class="card accuracy-card">
          <h3>Accuracy</h3>
          <div class="metric-main">${overall.accuracy}%</div>
          <p class="subtitle">${overall.correctCount} Correct / ${overall.totalAttempts} Attempts</p>
        </div>

        <!-- Overall Completion Card -->
        <div class="card completion-card">
          <h3>Overall Progress</h3>
          <div class="metric-main">${overall.attemptedUnitsCount} / ${overall.totalQuestionUnits}</div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${overall.completionPercent}%;"></div>
          </div>
          <p class="subtitle">${overall.chaptersStarted} of 29 Chapters Started</p>
        </div>
      </div>

      <!-- Chapter Progress Table -->
      <div class="card full-width">
        <h3>Chapter Breakdown</h3>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Attempted Units</th>
                <th>Accuracy</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${(window.SACHEE_DATA ? window.SACHEE_DATA.chapters : []).map(ch => {
                const cp = window.SACHEE_PROGRESS.getChapterProgress(ch.id);
                return `
                  <tr>
                    <td><strong>${ch.title}</strong></td>
                    <td>${cp.attemptedUnitsCount} /${cp.totalUnits}</td>
                    <td>${cp.totalAttempts > 0 ? cp.accuracy + '%' : '—'}</td>
                    <td><span class="badge">${cp.isCompleted ? 'Completed' : cp.attemptedUnitsCount > 0 ? 'In Progress' : 'Not Started'}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  window.renderStudentDashboard = renderStudentDashboard;
})(window);

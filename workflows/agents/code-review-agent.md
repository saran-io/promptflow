# Code Review Agent Workflow

> **Workflow Version**: 1.0  
> **Last Updated**: December 2024  
> **Contributor**: PromptFoundry Team

## 📋 Overview

An intelligent agentic workflow that performs comprehensive code reviews, providing detailed feedback on code quality, security, performance, and best practices. This agent can analyze pull requests, suggest improvements, and ensure code standards compliance.

- **Primary purpose**: Automate comprehensive code review processes
- **Target audience**: Development teams, DevOps engineers, and technical leads
- **Problem solved**: Reduces manual code review time while maintaining quality standards
- **Key benefits**: Consistent review quality, faster feedback cycles, educational insights

## 🛠️ Tool Compatibility

- [x] **Cursor** - IDE integration for real-time review
- [ ] **V0.dev** - UI component generation
- [x] **Windsurf** - Full-stack development workflows
- [ ] **Lovable** - Rapid prototyping
- [x] **Universal** - Works across multiple tools and platforms

## 🏷️ Workflow Type

**Primary**: Code Review & Analysis

**Secondary**: Quality Assurance, Security Analysis, Performance Optimization

## 🎯 Use Cases

- **Pull Request Reviews**: Automated analysis of code changes
- **Pre-commit Hooks**: Quality checks before code submission
- **Legacy Code Audits**: Comprehensive analysis of existing codebases
- **Onboarding Reviews**: Educational feedback for junior developers

## 🔄 Workflow Steps

### Phase 1: Initial Analysis
```
You are an expert code reviewer with deep knowledge of software engineering best practices, security, and performance optimization. Analyze the provided code and perform a comprehensive review.

Code Context:
- Language: [PROGRAMMING_LANGUAGE]
- Framework: [FRAMEWORK]
- Project Type: [PROJECT_TYPE]
- Review Scope: [SCOPE]

Analysis Areas:
1. Code Quality & Style
2. Security Vulnerabilities
3. Performance Issues
4. Best Practices Compliance
5. Documentation Quality
6. Test Coverage
7. Maintainability
8. Error Handling

For each area, provide:
- Severity level (Critical, High, Medium, Low)
- Specific issues found
- Recommended fixes
- Code examples where applicable

Start with a high-level summary, then provide detailed analysis.
```

### Phase 2: Security Analysis
```
Focus specifically on security aspects of the code:

Security Checklist:
1. Input validation and sanitization
2. Authentication and authorization
3. Data encryption and storage
4. SQL injection prevention
5. XSS protection
6. CSRF protection
7. Dependency vulnerabilities
8. Secrets management
9. Error information disclosure
10. Rate limiting and DoS protection

For each security concern:
- Risk level assessment
- Potential attack vectors
- Mitigation strategies
- Code examples of secure implementations

Provide a security score (1-10) with justification.
```

### Phase 3: Performance Review
```
Analyze the code for performance optimization opportunities:

Performance Areas:
1. Algorithm efficiency (Big O analysis)
2. Database query optimization
3. Memory usage patterns
4. Network request optimization
5. Caching strategies
6. Lazy loading opportunities
7. Bundle size optimization
8. Rendering performance (for UI code)

For each performance issue:
- Impact assessment
- Benchmarking suggestions
- Optimization recommendations
- Alternative approaches

Provide performance grade (A-F) with specific metrics.
```

### Phase 4: Best Practices Validation
```
Evaluate adherence to coding standards and best practices:

Standards Checklist:
1. Code organization and structure
2. Naming conventions
3. Function/method design
4. Error handling patterns
5. Logging and monitoring
6. Configuration management
7. Documentation completeness
8. Test quality and coverage

For each standard:
- Compliance level
- Specific violations
- Improvement suggestions
- Industry standard references

Generate a compliance report with actionable items.
```

### Phase 5: Final Recommendations
```
Synthesize all analysis into actionable recommendations:

Summary Report:
1. Overall code quality score
2. Priority issues to address
3. Quick wins for improvement
4. Long-term refactoring suggestions
5. Learning opportunities for the team

Action Items:
- Immediate fixes required
- Medium-term improvements
- Best practice adoptions
- Tool/process recommendations

Format as a structured report suitable for team discussion.
```

## 💡 Example Usage

### Scenario
Reviewing a React component with API integration for an e-commerce application.

### Input
```
Programming Language: TypeScript/React
Framework: Next.js
Project Type: E-commerce Web Application
Review Scope: ProductCard component with API integration

Code to review:
[Paste the component code here]
```

### Expected Output
```
# Code Review Report: ProductCard Component

## 🎯 Summary
Overall Quality Score: B+ (85/100)
Security Score: 8/10
Performance Grade: B

## 🔴 Critical Issues (0)
None found.

## 🟡 High Priority Issues (2)

### 1. Missing Error Boundary
**File**: ProductCard.tsx
**Line**: Component level
**Issue**: Component lacks error handling for API failures
**Impact**: Poor user experience when API calls fail
**Fix**: Implement error boundary or try-catch blocks

### 2. Potential Memory Leak
**File**: ProductCard.tsx  
**Line**: 45-52
**Issue**: useEffect cleanup not implemented
**Impact**: Memory leaks in component unmounting
**Fix**: Add cleanup function to useEffect

## 🟢 Medium Priority Issues (3)
[Detailed analysis continues...]

## 📊 Performance Analysis
- API call optimization needed
- Image lazy loading recommended
- Memoization opportunities identified

## 🔒 Security Assessment
- Input sanitization: ✅ Good
- XSS protection: ✅ Adequate
- Data validation: ⚠️ Needs improvement

## 📝 Recommendations
1. Implement error boundaries
2. Add loading states
3. Optimize re-renders with useMemo
4. Add comprehensive tests
```

## 🎨 Customization Options

### Variables to Replace
- `[PROGRAMMING_LANGUAGE]`: The primary language being reviewed
- `[FRAMEWORK]`: Framework or library being used
- `[PROJECT_TYPE]`: Type of application or system
- `[SCOPE]`: Specific files, functions, or features to review

### Workflow Variations
- **Security-Focused**: Emphasize security analysis over other aspects
- **Performance-Focused**: Deep dive into performance optimization
- **Educational**: Include learning resources and explanations
- **Quick Review**: Streamlined version for minor changes

## ✅ Best Practices

### Do's
- ✅ Provide specific, actionable feedback
- ✅ Include code examples in recommendations
- ✅ Prioritize issues by severity and impact
- ✅ Consider the team's skill level in feedback
- ✅ Reference industry standards and best practices

### Don'ts
- ❌ Don't provide vague or generic feedback
- ❌ Don't overwhelm with too many minor issues
- ❌ Don't ignore the business context
- ❌ Don't forget to acknowledge good practices

## 🔧 Integration Options

### CI/CD Integration
```bash
# GitHub Actions example
- name: AI Code Review
  uses: ./code-review-agent
  with:
    files: ${{ github.event.pull_request.changed_files }}
    language: typescript
    framework: react
```

### IDE Integration
- Cursor: Use as a custom prompt for file analysis
- VS Code: Integrate with extension for real-time feedback
- JetBrains: Custom inspection profiles

### Webhook Integration
- Slack notifications for review summaries
- Jira ticket creation for critical issues
- Email reports for team leads

## 📊 Success Metrics

How to measure workflow effectiveness:
- **Review Quality**: Reduction in post-deployment bugs
- **Team Velocity**: Faster review cycles without quality loss
- **Learning Impact**: Improvement in code quality over time
- **Security Posture**: Reduction in security vulnerabilities

## 🔗 Related Workflows

- **[Security Audit Agent](./security-audit-agent.md)** - Deep security analysis
- **[Performance Optimization Agent](./performance-agent.md)** - Performance-focused review
- **[Documentation Generator](./docs-generator-agent.md)** - Automated documentation

## 📚 Additional Resources

- [Google Code Review Guidelines](https://google.github.io/eng-practices/review/) - Industry standards
- [OWASP Code Review Guide](https://owasp.org/www-project-code-review-guide/) - Security focus
- [Clean Code Principles](https://clean-code-developer.com/) - Best practices

## 🏷️ Tags

`code-review` `automation` `quality-assurance` `security` `performance` `agent-workflow`

## 📝 Changelog

### v1.0 - December 2024
- Initial workflow version
- Comprehensive review process
- Multi-phase analysis approach
- Integration examples

---

**💡 Pro Tip**: Customize the severity thresholds based on your team's maturity and project requirements. Start with broader checks and gradually increase specificity.

**🤝 Contribution**: Found this workflow helpful? Consider contributing improvements or variations for specific languages and frameworks! 
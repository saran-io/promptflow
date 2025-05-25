# Contributing to PromptFoundry

Thank you for your interest in contributing to PromptFoundry! This guide will help you get started with contributing high-quality prompts and improvements to our community-driven repository.

## 🎯 How to Contribute

### Types of Contributions We Welcome

1. **New Prompts** - Add prompts for specific tools or use cases
2. **Prompt Improvements** - Enhance existing prompts with better clarity or effectiveness
3. **Documentation** - Improve guides, examples, and explanations
4. **Workflow Templates** - Add agentic workflow patterns
5. **Bug Fixes** - Fix broken links, formatting, or incorrect information
6. **Examples** - Add real-world usage examples

## 📝 Prompt Contribution Guidelines

### Quality Standards

All prompts should be:
- ✅ **Production-ready** - Tested and proven to work effectively
- ✅ **Clear and specific** - Easy to understand and follow
- ✅ **Well-documented** - Include context, examples, and expected outcomes
- ✅ **Reusable** - Applicable across different projects and scenarios
- ✅ **Tool-appropriate** - Optimized for the specific AI tool

### Prompt Structure

Each prompt should follow our standard template (see [templates/prompt-template.md](./templates/prompt-template.md)):

```markdown
# Prompt Title

## Description
Brief description of what this prompt does and when to use it.

## Tool Compatibility
- [x] Cursor
- [ ] V0.dev
- [ ] Windsurf
- [ ] Lovable

## Category
- Code Generation / UI-UX / Documentation / Testing / DevOps

## Prompt

```
[Your actual prompt here]
```

## Example Usage
Show how to use this prompt with real examples.

## Expected Output
Describe what kind of output this prompt typically generates.

## Tips & Best Practices
- Additional tips for getting the best results
- Common pitfalls to avoid

## Related Prompts
- Link to similar or complementary prompts
```

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/yourusername/promptfoundry.git
cd promptfoundry
```

### 2. Create a Branch

```bash
git checkout -b feature/your-prompt-name
```

### 3. Add Your Contribution

- Place prompts in the appropriate directory structure
- Follow the naming convention: `kebab-case-description.md`
- Use the prompt template for consistency

### 4. Test Your Prompt

Before submitting:
- Test the prompt with the target AI tool
- Verify it produces the expected results
- Check for any edge cases or limitations

### 5. Submit a Pull Request

```bash
git add .
git commit -m "Add: [Tool] - [Category] - [Brief Description]"
git push origin feature/your-prompt-name
```

Then create a pull request on GitHub with:
- Clear title describing your contribution
- Description of what the prompt does
- Any testing you've performed
- Screenshots or examples if applicable

## 📁 Directory Structure Guide

```
prompts/
├── cursor/                 # Cursor IDE specific prompts
│   ├── code-generation/   # Code creation and scaffolding
│   ├── review/            # Code review and analysis
│   ├── documentation/     # Documentation generation
│   └── testing/           # Test generation and debugging
├── v0/                    # V0.dev specific prompts
│   ├── components/        # UI component generation
│   ├── ui-ux/            # Design and styling
│   └── dashboards/       # Dashboard creation
├── windsurf/              # Windsurf specific prompts
│   ├── code-generation/   # Full-stack development
│   └── devops/           # Deployment and infrastructure
├── lovable/               # Lovable specific prompts
│   ├── components/        # Rapid prototyping
│   └── dashboards/       # MVP dashboards
└── universal/             # Cross-platform prompts
    ├── code-generation/   # General coding prompts
    ├── ui-ux/            # Design principles
    ├── documentation/     # Documentation standards
    ├── testing/          # Testing strategies
    └── devops/           # DevOps practices
```

## 🏷️ Naming Conventions

### File Names
- Use kebab-case: `react-component-generator.md`
- Be descriptive but concise
- Include the main purpose: `api-documentation-writer.md`

### Commit Messages
Follow this format:
```
Type: [Tool] - [Category] - Brief description

Examples:
Add: Cursor - Code Generation - React hook generator
Fix: V0 - Components - Button component styling
Update: Universal - Documentation - API docs template
```

### Types:
- `Add:` - New prompts or features
- `Fix:` - Bug fixes or corrections
- `Update:` - Improvements to existing content
- `Docs:` - Documentation changes
- `Refactor:` - Restructuring without changing functionality

## 🔍 Review Process

### What We Look For

1. **Effectiveness** - Does the prompt produce good results?
2. **Clarity** - Is it easy to understand and use?
3. **Documentation** - Is it well-documented with examples?
4. **Uniqueness** - Does it add value not covered by existing prompts?
5. **Quality** - Is it production-ready and tested?

### Review Timeline

- Initial review: 2-3 days
- Feedback incorporation: As needed
- Final approval: 1-2 days after feedback addressed

## 💡 Tips for Great Contributions

### Writing Effective Prompts

1. **Be Specific** - Vague prompts lead to inconsistent results
2. **Provide Context** - Include relevant background information
3. **Use Examples** - Show the AI what you want with concrete examples
4. **Set Constraints** - Define boundaries and requirements clearly
5. **Test Thoroughly** - Try your prompt multiple times with different inputs

### Documentation Best Practices

1. **Clear Descriptions** - Explain the purpose and use case
2. **Step-by-Step Examples** - Show exactly how to use the prompt
3. **Expected Outcomes** - Describe what results to expect
4. **Troubleshooting** - Include common issues and solutions
5. **Related Content** - Link to similar or complementary prompts

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and improve
- Focus on the quality of contributions
- Celebrate diverse perspectives and approaches

### Getting Help

- **Issues**: Use GitHub issues for bugs or feature requests
- **Discussions**: Use GitHub discussions for questions and ideas
- **Discord**: Join our community for real-time chat
- **Email**: Contact maintainers for sensitive issues

## 🏆 Recognition

Contributors will be:
- Listed in our contributors section
- Credited in prompt files they create
- Featured in community highlights
- Invited to join our contributor program

## 📚 Resources

- [Prompt Engineering Guide](./docs/prompt-engineering.md)
- [Tool-Specific Guidelines](./docs/tool-guidelines.md)
- [Best Practices](./docs/best-practices.md)
- [Example Contributions](./examples/)

---

Thank you for helping make PromptFoundry better for everyone! 🚀 
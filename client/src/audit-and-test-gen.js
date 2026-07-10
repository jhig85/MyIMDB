const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../src/components');

// Function to generate a Jest template for a React component
function generateTestTemplate(componentName) {
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
    test('renders correctly', () => {
        render(<${componentName} />);
        // Add your assertions here
    });
});
`;
}

// Function to audit and optionally generate a new test
function auditAndCreateTests(newFilePath) {
  if (!fs.existsSync(COMPONENTS_DIR)) return;

  const files = fs.readdirSync(COMPONENTS_DIR);
  const components = new Set();
  const tests = new Set();

  // Identify all components and existing tests
  files.forEach((file) => {
    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      components.add(path.basename(file, path.extname(file)));
    } else if (file.endsWith('.test.tsx') || file.endsWith('.test.jsx')) {
      tests.add(path.basename(file, '.test.tsx'));
    }
  });

  // Handle newly created file (If applicable)
  if (newFilePath && newFilePath.endsWith('.tsx')) {
    const newComponentName = path.basename(newFilePath, '.tsx');
    if (!tests.has(newComponentName) && components.has(newComponentName)) {
      const testPath = path.join(
        COMPONENTS_DIR,
        `${newComponentName}.test.tsx`
      );
      fs.writeFileSync(testPath, generateTestTemplate(newComponentName));
      console.log(
        `[Created] Test for new component: ${newComponentName}.test.tsx`
      );
    }
  }

  // Audit for other components needing tests
  console.log('\n--- Component Test Audit ---');
  let needsTests = [];
  components.forEach((comp) => {
    if (!tests.has(comp)) {
      needsTests.push(comp);
      console.log(`⚠️  Missing test: ${comp}.tsx`);
    }
  });

  if (needsTests.length === 0) {
    console.log('✅ All components have unit tests!');
  }
  console.log('----------------------------\n');
}

// Run the script. If a file path is passed, we check/generate for it.
const targetFile = process.argv[2];
auditAndCreateTests(targetFile ? path.resolve(targetFile) : null);

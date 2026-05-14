#!/usr/bin/env sh

set -eu

output="$(craftos --headless --script tests/runner.lua --mount .=tests/ 2>/dev/null)"
output="$(printf '%s\n' "${output}" | sed -n '/======== START ========/,$p' | tail -n +2)"

printf '%s\n' "${output}"
printf '%s\n' "${output}" | grep -Fq "[PASS] Generated test completed successfully."

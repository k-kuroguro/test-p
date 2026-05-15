#!/usr/bin/env sh

set -eu

tmp="$(mktemp)"
craftos \
  --headless \
  --script tests/runner.lua \
  --mount .=tests/ \
  > "${tmp}" 2>/dev/null

output="$(sed -n '/======== START ========/,$p' "${tmp}" | tail -n +2)"

printf '%s\n' "${output}"
printf '%s\n' "${output}" | grep -Fq "[PASS] Generated test finished successfully."

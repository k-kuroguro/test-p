#!/usr/bin/env sh

set -eu

output="$(craftos --headless --script tests/runner.lua --mount .=tests/)"

printf '%s\n' "$output"
printf '%s\n' "$output" | grep -Fq "[PASS] Generated test finished successfully."
